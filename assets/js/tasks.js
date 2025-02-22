import { db, auth } from "./firebase.js";
import { signOut } from "firebase/auth";
import { doc, getDoc, getDocs, addDoc, updateDoc, collection, query, where, deleteDoc } from "firebase/firestore";
import QRCode from 'qrcode';
import { GoogleGenerativeAI } from "@google/generative-ai";
auth.onAuthStateChanged(async (user) => {
  if (user) {
    await loadTransactions();
  }
});

// Elements
const logoutBtn = document.getElementById("logoutBtn");

// Chatbot Elements
const chatbotModal = document.getElementById("chatbotModal");
const closeChatbotBtn = document.getElementById("closeChatbot");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChat");
const chatbotMessages = document.getElementById("chatbotMessages");

// Transactions Elements
const addTransactionBtn = document.getElementById("addTransactionBtn");
const transactionModal = document.getElementById("transactionModal");
const transactionForm = document.getElementById("transactionForm");
const cancelBtn = document.getElementById("cancelBtn");
const transactionsList = document.getElementById("transactionsList");

const generateQRCodeButton = document.getElementById("generateQRCodeBtn");

// Logout button
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("Signed out successfully!");
      window.location.href = "index.html"; // Redirect to login page
    })
    .catch((error) => {
      console.error("Error signing out:", error.message);
    });
});

// Generate QR code
generateQRCodeButton.addEventListener('click', () => {
  document.getElementById("qrcode").style.display = "block";
});

// Add Transaction Button
addTransactionBtn.addEventListener("click", () => {
  transactionModal.classList.add("active");
});

// Cancel Button
cancelBtn.addEventListener("click", () => {
  transactionModal.classList.remove("active");
  transactionForm.reset();
});

// Function to load the transactions
async function loadTransactions() {
  const user = auth.currentUser;
  if (!user) {
    console.log("No user is currently logged in.");
    return;
  }

  try {
    console.log("Loading transactions for user:", user.uid);
    const snapshot = await getDocs(query(collection(db, "transactions"), where("userId", "==", user.uid)));

    let totalIncome = 0;
    let totalExpenses = 0;
    transactionsList.innerHTML = "";

    if (snapshot.empty) {
      console.log("No transactions found for the user.");
      transactionsList.innerHTML = "No transactions yet";
      return;
    }

    snapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
      console.log("Transaction data:", data);

      if (data.type === "income") {
        totalIncome += Number.parseFloat(data.amount);
      } else {
        totalExpenses += Number.parseFloat(data.amount);
      }

      const div = document.createElement("div");
      div.className = `transaction ${data.type}`;
      div.innerHTML = `${data.description} ${data.type === "income" ? "+" : "-"}$${Number.parseFloat(data.amount).toFixed(2)}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", async () => {
        try {
          // Deleting the transaction using the docSnapshot reference
          await deleteDoc(doc(db, "transactions", docSnapshot.id));
          showToast("Transaction deleted successfully!");
          loadTransactions(); // Reload the transactions after deletion
        } catch (error) {
          console.error("Error deleting transaction:", error.message);
          showToast("Error deleting transaction: " + error.message, "error");
        }
      });

      div.appendChild(deleteBtn);
      transactionsList.appendChild(div);
    });

    document.getElementById("totalBalance").textContent = `$${(totalIncome - totalExpenses).toFixed(2)}`;
    document.getElementById("totalIncome").textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById("totalExpenses").textContent = `$${totalExpenses.toFixed(2)}`;
  } catch (error) {
    console.error("Error loading transactions:", error.message);
    showToast("Error loading transactions: " + error.message, "error");
  }
}

// Handle Add Transaction Form Submission
transactionForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const description = event.target.description.value;
  const amount = parseFloat(event.target.amount.value);
  const type = event.target.type.value;
  const user = auth.currentUser;

  if (!user) {
    console.log("User not logged in.");
    return;
  }

  if (!description || isNaN(amount) || !type) {
    console.log("Invalid form data.");
    return;
  }

  try {
    // Add transaction to Firestore
    await addDoc(collection(db, "transactions"), {
      description,
      amount,
      type,
      userId: user.uid,
      createdAt: new Date(),
    });

    // Show success message and reload transactions
    showToast("Transaction added successfully!");
    loadTransactions();

    // Close modal and reset form
    transactionModal.classList.remove("active");
    transactionForm.reset();
  } catch (error) {
    console.error("Error adding transaction:", error.message);
    showToast("Error adding transaction: " + error.message, "error");
  }
});

// Chatbot Functionality
document.getElementById("chatbotButton").addEventListener("click", () => {
  chatbotModal.classList.toggle("hidden");
});

closeChatbotBtn.addEventListener("click", () => {
  chatbotModal.classList.add("hidden");
});

sendChatBtn.addEventListener("click", async () => {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  displayMessage("You", userMessage);
  chatInput.value = "";

  try {
    const response = await callGeminiAI(userMessage);
    displayMessage("Gemini AI", response);
  } catch (error) {
    showToast("Error processing chat request: " + error.message, "error");
  }
});

async function callGeminiAI(message) {
  try {
    const genAI = new GoogleGenerativeAI("AIzaSyBhm6u2K38LIE47GCX-QHhecGuQ9N4-a_w");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    return result.response.text();
  } catch (error) {
    console.error("Error calling Gemini AI:", error);
    return "Error: Unable to process your request. Please try again later.";
  }
}

function displayMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "chat-message";
  messageDiv.innerHTML = `${sender}: ${message}`;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Toast Function
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.getElementById("toastContainer").appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
