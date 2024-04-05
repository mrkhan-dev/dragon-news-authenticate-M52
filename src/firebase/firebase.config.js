// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8qfoJUroF3EX1Uvb386H1gwWpSpDLwTs",
  authDomain: "dragon-news-authenticate.firebaseapp.com",
  projectId: "dragon-news-authenticate",
  storageBucket: "dragon-news-authenticate.appspot.com",
  messagingSenderId: "246453539691",
  appId: "1:246453539691:web:07b4729414fd0d6cb3b22e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
