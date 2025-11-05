// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuration Firebase (celle de ton projet)
const firebaseConfig = {
  apiKey: "AIzaSyD5IOMFaX-mzjVtvjeGeHclf0vOXBQnWmE",
  authDomain: "dardesign-aa79d.firebaseapp.com",
  projectId: "dardesign-aa79d",
  storageBucket: "dardesign-aa79d.firebasestorage.app",
  messagingSenderId: "657323573891",
  appId: "1:657323573891:web:d07eaf8fcf959e2da251b6",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Ajouter cette ligne pour créer la base de données Firestore
export const db = getFirestore(app);
