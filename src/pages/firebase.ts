import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// This config connects your code specifically to your "Travail" project
const firebaseConfig = {
  apiKey: "AIzaSyD43UXkUoByFR72wZUKletTyhuGdh9Ql9U", // Copy this from your current Project settings tab
  authDomain: "travail-57aac.firebaseapp.com",
  projectId: "travail-57aac",
  storageBucket: "travail-57aac.firebasestorage.app",
  messagingSenderId: "677954574891",
  appId: "1:677954574891:web:605074272471878fef686e" // Copy this from your current Project settings tab
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Export the Auth and Firestore services so your other files can use them
export const auth = getAuth(app);
export const db = getFirestore(app);
