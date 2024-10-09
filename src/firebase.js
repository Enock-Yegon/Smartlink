// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCxnIu8Cti6ShDuRKJMSnLqsfNOOdlZRpY",
    authDomain: "smartlink-academy.firebaseapp.com",
    projectId: "smartlink-academy",
    storageBucket: "smartlink-academy.appspot.com",
    messagingSenderId: "250907592335",
    appId: "1:250907592335:web:e65ad275b7bcd63c4552fa",
    measurementId: "G-LY0GVLZYPF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
