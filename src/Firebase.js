import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "{}",
    authDomain: "{projectId}.firebaseapp.com",
    projectId: "{projectId}",
    storageBucket: "{projectId}.appspot.com",
    messagingSenderId: "{}",
    appId: "{appId}",
    measurementId: "{}"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
  
export default db;