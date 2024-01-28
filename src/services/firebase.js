// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT2F8GMKio9qwE0QHyPn4CtF7uEy_XcxY",
  authDomain: "klinks-27ac2.firebaseapp.com",
  projectId: "klinks-27ac2",
  storageBucket: "klinks-27ac2.appspot.com",
  messagingSenderId: "161915316544",
  appId: "1:161915316544:web:5518d5b8896d9539faf2a5",
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Auth (for user authentication)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

// Get current user data from Firestore
const fetchUserData = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists) {
      console.log(userDoc.data());
      return userDoc.data(); // This will return the user data object
    } else {
      console.log("No user data found!");
      return null; // Handle the case where the user data doesn't exist
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
    return null; // Handle the error appropriately
  }
};

export { auth, db, fetchUserData };