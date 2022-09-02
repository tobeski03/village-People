import { getFirestore } from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js";

import { getAuth } from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js";

import { initializeApp } from "https:/www.gstatic.com/firebasejs/9.9.2/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rlkFTHGlrsBPNkhIuXA-ddUkybfoqs0",
  authDomain: "villagepeople-5769a.firebaseapp.com",
  projectId: "villagepeople-5769a",
  storageBucket: "villagepeople-5769a.appspot.com",
  messagingSenderId: "974108416357",
  appId: "1:974108416357:web:43d1b9e65435f0452d298c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

//  login in
