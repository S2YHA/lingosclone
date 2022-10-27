// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCPMqBIXcF2OECuXraPjtWjbEWRK_O7NGA",
    authDomain: "lingosclone.firebaseapp.com",
    databaseURL: "https://lingosclone-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lingosclone",
    storageBucket: "lingosclone.appspot.com",
    messagingSenderId: "833769679649",
    appId: "1:833769679649:web:90737eabe449bb2a5cec60",
    measurementId: "G-GSG73RCCXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase auth
const auth = getAuth()

export { app, auth }