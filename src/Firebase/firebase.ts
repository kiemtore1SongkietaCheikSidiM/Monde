/* Here I import all the package I will use */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const authe = import.meta.env.VITE_auth
const apifire = import.meta.env.VITE_apikey
const protect = import.meta.env.VITE_protect
const storage = import.meta.env.VITE_storage
const message = import.meta.env.VITE_message
const appID = import.meta.env.VITE_APPID
// This config connects your code specifically to your "Travail" project
const firebaseConfig = {
  apiKey: apifire,
  authDomain: authe,
  projectId: protect,
  storageBucket: storage,
  messagingSenderId: message,
  appId: appID // Copy this from your current Project settings tab
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Export the Auth and Firestore services so your other files can use them
export const auth = getAuth(app);
export const db = getFirestore(app);
