import { auth } from "./firebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


const sw = new URL('service-worker.js', import.meta.url);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(sw.href, { scope: '/budget-web-app/' })
        .then(() => console.log('Service Worker Registered for scope:', sw.href))
        .catch(err => console.error('Service Worker Error:', err));
}

function signIn() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem("email", JSON.stringify(user.email));
            window.location.href = "transactions.html";
        })
        .catch((error) => {
            console.error('Login Error:', error.message);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const signInBttn = document.getElementById('googleLoginBtn');
    if (signInBttn) {
        signInBttn.addEventListener("click", signIn);
    } else {
        console.error("Sign-in button not found.");
    }
});

//Biometric auth