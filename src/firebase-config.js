// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// import { getAnalytics } from "firebase/analytics";

// const {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID,
//   FIREBASE_MEASUREMENT_ID,
// } = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyBxom2lw3sjWKHBcrpVTR6GjJzvfGZi5k4",
  authDomain: "altschool-exam-13c54.firebaseapp.com",
  projectId: "altschool-exam-13c54",
  storageBucket: "altschool-exam-13c54.appspot.com",
  messagingSenderId: "694880360827",
  appId: "1:694880360827:web:b9f3b81fbaf4ad865585de",
  measurementId: "G-8Y5EL66ERE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
