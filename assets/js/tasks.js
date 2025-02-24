import { db, auth } from "./firebase.js";
import { signOut } from "firebase/auth";
import { doc, getDocs, addDoc, updateDoc, collection, query, where, deleteDoc } from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Auth State Change
auth.onAuthStateChanged(async (user) => {
  if (user) {
    await loadTransactions();
  }
});

// Elements
const logoutBtn = document.getElementById("logoutBtn");
const biometricAuthBtn = document.getElementById("biometricAuthBtn");
const generateQRCodeButton = document.getElementById("generateQRCodeBtn");

// Transactions Elements
const addTransactionBtn = document.getElementById("addTransactionBtn");
const transactionModal = document.getElementById("transactionModal");
const transactionForm = document.getElementById("transactionForm");
const cancelBtn = document.getElementById("cancelBtn");
const transactionsList = document.getElementById("transactionsList");

// Chatbot Elements
const chatbotModal = document.getElementById("chatbotModal");
const closeChatbotBtn = document.getElementById("closeChatbot");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChat");
const chatbotMessages = document.getElementById("chatbotMessages");

// Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("Signed out successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error signing out:", error.message);
    });
});

// Generate QR Code
generateQRCodeButton.addEventListener("click", function () {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: "https://whitemouse25.github.io/budget-web-app/",
    width: 128,
    height: 128
  });
  qrContainer.style.display = "block";
});

// Add Transaction
addTransactionBtn.addEventListener("click", () => {
  transactionModal.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  transactionModal.classList.remove("active");
  transactionForm.reset();
});

// Load Transactions
async function loadTransactions() {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const snapshot = await getDocs(query(collection(db, "transactions"), where("userId", "==", user.uid)));

    let totalIncome = 0, totalExpenses = 0;
    transactionsList.innerHTML = snapshot.empty ? "No transactions yet" : "";

    snapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
      if (data.type === "income") totalIncome += parseFloat(data.amount);
      else totalExpenses += parseFloat(data.amount);

      const div = document.createElement("div");
      div.className = `transaction ${data.type}`;
      div.innerHTML = `${data.description} ${data.type === "income" ? "+" : "-"}$${parseFloat(data.amount).toFixed(2)}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", async () => {
        try {
          await deleteDoc(doc(db, "transactions", docSnapshot.id));
          showToast("Transaction deleted successfully!");
          loadTransactions();
        } catch (error) {
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
    showToast("Error loading transactions: " + error.message, "error");
  }
}

// Add Transaction Form Submission
transactionForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const description = event.target.description.value;
  const amount = parseFloat(event.target.amount.value);
  const type = event.target.type.value;
  const user = auth.currentUser;

  if (!user || !description || isNaN(amount) || !type) return;

  try {
    await addDoc(collection(db, "transactions"), {
      description,
      amount,
      type,
      userId: user.uid,
      createdAt: new Date(),
    });

    showToast("Transaction added successfully!");
    loadTransactions();
    transactionModal.classList.remove("active");
    transactionForm.reset();
  } catch (error) {
    showToast("Error adding transaction: " + error.message, "error");
  }
});

// Chatbot
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
    const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    return result.response.text();
  } catch (error) {
    return "Error: Unable to process your request.";
  }
}

function displayMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "chat-message";
  messageDiv.innerHTML = `${sender}: ${message}`;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Toast Notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.getElementById("toastContainer").appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

