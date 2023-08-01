// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUByAx1nQzNhQT_h8fQCUiV_7P__ZszOc",
  authDomain: "nest-c8a5b.firebaseapp.com",
  projectId: "nest-c8a5b",
  storageBucket: "nest-c8a5b.appspot.com",
  messagingSenderId: "163508104760",
  appId: "1:163508104760:web:502a950c1081c23ca940cd",
};

// Initialize Firebase
const init = initializeApp(firebaseConfig);
export const db = getFirestore(init);
export const auth = getAuth(init);
export default init;
