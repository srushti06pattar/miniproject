
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW8NTxDsRZUTONYfRojdHq8FdAny9pch4",
  authDomain: "dapp-23229.firebaseapp.com",
  projectId: "dapp-23229",
  storageBucket: "dapp-23229.firebasestorage.app",
  messagingSenderId: "330630784744",
  appId: "1:330630784744:web:b7dc2230524287b3aa8b5d",
  measurementId: "G-RQLEQMCQ17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export{app,auth};