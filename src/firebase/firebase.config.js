// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrqE17qb7XEi4rGrIkqH4JYG5xRzdbCsY",
    authDomain: "resource-fyi.firebaseapp.com",
    projectId: "resource-fyi",
    storageBucket: "resource-fyi.appspot.com",
    messagingSenderId: "1015453682137",
    appId: "1:1015453682137:web:75517554899ba5117571c8",
    measurementId: "G-E1GREHL54Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);