import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "e-commerce-taboada.firebaseapp.com",
    projectId: "e-commerce-taboada",
    storageBucket: "e-commerce-taboada.appspot.com",
    messagingSenderId: "549354561664",
    appId: "1:549354561664:web:4751c2e04fedeaffd80665"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);