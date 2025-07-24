// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe5Pj9Cc_YKhYVU6Cyo_6b-AE0sku8CZQ",
  authDomain: "turfbooking-58a9a.firebaseapp.com",
  projectId: "turfbooking-58a9a",
  storageBucket: "turfbooking-58a9a.firebasestorage.app",
  messagingSenderId: "1028354126884",
  appId: "1:1028354126884:web:d5f548e24d4339af03d4b1",
  measurementId: "G-3V7SK3B9BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);