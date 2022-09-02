import {
  onAuthStateChanged,
  signOut,
  getAuth,
} from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js";

import { auth, db } from "./auth.js";

//
// --------------pricing------------

let activeUser = "";

let regbutton = document.getElementById("btnregnav");
let loginbutton = document.getElementById("btnloginnav");
let floatReg = document.getElementById("floatGetStarted");
let floatpricing = document.getElementById("navbar").children[0].children[5];
let floatprofile = document.getElementById("navbar").children[0].children[6];
console.log(floatpricing);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    activeUser = user.uid;
    getUserData(activeUser);
    regbutton.style.display = "none";
    loginbutton.style.display = "none";
    logoutbutton.style.display = "inline-block";
    floatReg.style.display = "none";
  } else {
    regbutton.style.display = "inline-block";
    loginbutton.style.display = "inline-block";
    // floatReg.style.display = "inline-block";
  }
});

let logoutbutton = document.getElementById("btnlogout");

function LogOut() {
  signOut(auth).then(() => {
    alert("you are logged out");
    window.location.replace("/backend/login.html");
  });
}
let User = {};

async function getUserData(userId) {
  const docRef = doc(db, "user", userId);
  const userData = await getDoc(docRef);
  User = userData.data();
  if (User.status == "Student") {
  } else if (User.status == "Tutor") {
    floatprofile.style.display = "inline-block";
    floatpricing.style.display = "inline-block";
  }
}

logoutbutton.addEventListener("click", () => {
  LogOut();
});
