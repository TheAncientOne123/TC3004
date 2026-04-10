// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdn1xFQcUxgny-k8AWSwO9TjAeI6bIU9s",
  authDomain: "crud-fire-47122.firebaseapp.com",
  projectId: "crud-fire-47122",
  storageBucket: "crud-fire-47122.firebasestorage.app",
  messagingSenderId: "632826590882",
  appId: "1:632826590882:web:4feff898991e240e2889fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };