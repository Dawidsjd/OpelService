// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOayH4RAvWXM7k_sAA-GUrcKXPJVw3VmE",
  authDomain: "next-opel-login.firebaseapp.com",
  projectId: "next-opel-login",
  storageBucket: "next-opel-login.appspot.com",
  messagingSenderId: "248645186640",
  appId: "1:248645186640:web:54f30dfff29de4d047cd55"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}