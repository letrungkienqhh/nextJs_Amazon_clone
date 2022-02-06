import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeP9DDcOKDXupmi4FL9-FwNhiLVaiKiuc",
  authDomain: "kienletrung-7f0f9.firebaseapp.com",
  projectId: "kienletrung-7f0f9",
  storageBucket: "kienletrung-7f0f9.appspot.com",
  messagingSenderId: "166265886822",
  appId: "1:166265886822:web:5b9e96309f5f15b42075a7",
  measurementId: "G-XXNRPK4N4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);