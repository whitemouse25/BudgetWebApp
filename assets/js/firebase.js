import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfr8hn7WyMTPK9kX3A9cHL_2_EPX-41lg",
    authDomain: "web-development-trends.firebaseapp.com",
    projectId: "web-development-trends",
    storageBucket: "web-development-trends.firebasestorage.app",
    messagingSenderId: "1033130996649",
    appId: "1:1033130996649:web:dc33f415f1ce75b5494ab8",
};

const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export the instances
export { auth, db };
