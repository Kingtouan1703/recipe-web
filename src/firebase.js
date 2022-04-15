import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ12eE_Oprh2sRCrdK2PpHe0GcQEM6ekk",
  authDomain: "quan-bia-2f5ea.firebaseapp.com",
  projectId: "quan-bia-2f5ea",
  storageBucket: "quan-bia-2f5ea.appspot.com",
  messagingSenderId: "960794563753",
  appId: "1:960794563753:web:30546a6893f924dcf445b8",
  measurementId: "G-X6E7CKYC7M"
};

// Initialize Firebase
// Initialize Cloud Firestore and get a reference to the service
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const providerFirebase = new GoogleAuthProvider()
export  { db  ,auth ,providerFirebase} 