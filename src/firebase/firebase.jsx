import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC2KLB5EJWzH2gF-qpiLwos77H8cjdNi3U",
    authDomain: "market-list-f41a9.firebaseapp.com",
    projectId: "market-list-f41a9",
    storageBucket: "market-list-f41a9.appspot.com",
    messagingSenderId: "625933212431",
    appId: "1:625933212431:web:77844e621191fe0ba73c7a",
    measurementId: "G-PRT58RDN4X"
    };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);