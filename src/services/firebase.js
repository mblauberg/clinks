/**
 * Firebase Configuration Service
 * Handles Firebase initialization, authentication, and Firestore database operations
 */

import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Firebase configuration object
 * Uses environment variables for API key security
 */
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "klinks-27ac2.firebaseapp.com",
  projectId: "klinks-27ac2",
  storageBucket: "klinks-27ac2.appspot.com",
  messagingSenderId: "161915316544",
  appId: "1:161915316544:web:5518d5b8896d9539faf2a5",
};

/**
 * Initialize Firebase App
 * Uses singleton pattern to avoid re-initialization
 */
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

/**
 * Initialize Firebase Auth with React Native persistence
 * Uses AsyncStorage for offline auth state persistence
 */
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

/**
 * Initialize Firestore database
 */
const db = getFirestore(app);

/**
 * Fetches user data from Firestore
 * @param {string} userId - The user's unique ID
 * @returns {Promise<Object|null>} User data object or null if not found/error
 */
const fetchUserData = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      console.log("User data retrieved:", userDoc.data());
      return userDoc.data();
    } else {
      console.log("No user data found for ID:", userId);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export { auth, db, fetchUserData };