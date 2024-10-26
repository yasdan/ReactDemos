// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

//import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// reference url: https://chat-yesdani-default-rtdb.firebaseio.com/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoxCanOvh57Voc9OyyWrStu0FllSgpi5c",
  authDomain: "chat-yesdani.firebaseapp.com",
  projectId: "chat-yesdani",
  storageBucket: "chat-yesdani.appspot.com",
  messagingSenderId: "872354117561",
  appId: "1:872354117561:web:1a51edf1d1ff7e22dea868",
  measurementId: "G-45NRLG2GKQ"
};

// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getDatabase(app);*/

let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  }
  catch (error) {
  console.error("Firebase initialization error:", error);
}

export { db };