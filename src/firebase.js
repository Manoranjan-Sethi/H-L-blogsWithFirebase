import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJsRJNvNaAG_zT6VGRiHrDJBwTZ8K3bGI",
  authDomain: "fireblogs-6a558.firebaseapp.com",
  projectId: "fireblogs-6a558",
  storageBucket: "fireblogs-6a558.appspot.com",
  messagingSenderId: "418676061003",
  appId: "1:418676061003:web:f9faafda7c403687932ece",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
