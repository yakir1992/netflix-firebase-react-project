// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD12EpydB1gcWsfzIpUOOpIOSPCV1mis0",
  authDomain: "netflix-firebase-react-project.firebaseapp.com",
  projectId: "netflix-firebase-react-project",
  storageBucket: "netflix-firebase-react-project.appspot.com",
  messagingSenderId: "242187933654",
  appId: "1:242187933654:web:985c214ba5a1fadd49f677"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
