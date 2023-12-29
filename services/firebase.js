// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT2F8GMKio9qwE0QHyPn4CtF7uEy_XcxY",
  authDomain: "klinks-27ac2.firebaseapp.com",
  projectId: "klinks-27ac2",
  storageBucket: "klinks-27ac2.appspot.com",
  messagingSenderId: "161915316544",
  appId: "1:161915316544:web:5518d5b8896d9539faf2a5"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const auth = getAuth(app);

export { auth };
