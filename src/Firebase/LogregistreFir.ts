import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import type { UserProfile } from '../types';
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/firebase";



export async function loginUser(email: string, password: string): Promise<void> {
  try {
    // This securely verifies credentials and starts a user session
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(`User logged in successfully! UID: ${user.uid}`);
  } catch (error: unknown) {
    // catching error and send the message 
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/invalid-credential":
        case "auth/user-not-found":
        case "auth/wrong-password":
          console.error("Adresse e-mail ou mot de passe incorrect.");
          break;
        default:
          console.error(`Login error [${error.code}]: ${error.message}`);
      }
    } else {
      console.error("An unexpected error occurred:", error);
      const navigate = useNavigate()
      navigate('/error')
    }
    throw new Error
  }
}

// function to make a registration in the fire base
export async function registerUser(
  displayName: string,
  email: string,
  password: string
): Promise<void> {
  try {
    // TypeScript automatically infers the correct type for userCredential!
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userProfile: UserProfile = {
      displayName: displayName,
      email: email,
      createdAt: new Date()
    };

    await setDoc(doc(db, "users", user.uid), userProfile);
    console.log(`Successfully registered user with UID: ${user.uid}`);

  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error(`Firebase error [${error.code}]: ${error.message}`);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}