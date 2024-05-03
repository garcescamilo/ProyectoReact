// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGrruE5aXlyQegAFcQ9-aS39mJ1xhoUIo",
    authDomain: "gestion-login-56907.firebaseapp.com",
    projectId: "gestion-login-56907",
    storageBucket: "gestion-login-56907.appspot.com",
    messagingSenderId: "934764807428",
    appId: "1:934764807428:web:8c487e27251d21921a7c51"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;