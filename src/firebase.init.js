// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBPK6SUJ5Y7g-wUYxd_I-gMqRiqhFGcUKo",
//   authDomain: "assignment-10-cb87b.firebaseapp.com",
//   projectId: "assignment-10-cb87b",
//   storageBucket: "assignment-10-cb87b.appspot.com",
//   messagingSenderId: "179835532043",
//   appId: "1:179835532043:web:d209142ab21a01eb87a80e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);