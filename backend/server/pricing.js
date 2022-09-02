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

let freebuy = document.getElementById("freebuy");
let firstpaidbuy = document.getElementById("1paidbuy");
let secondpaidbuy = document.getElementById("2paidbuy");
let thirdpaidbuy = document.getElementById("3paidbuy");

freebuy.addEventListener("click", () => free());
firstpaidbuy.addEventListener("click", () => firstbuy());
secondpaidbuy.addEventListener("click", secondbuy);
thirdpaidbuy.addEventListener("click", thirdbuy);

onAuthStateChanged(auth, (user) => {
  if (user) {
    let dholder = document.getElementById("dholder");
    const uid = user.uid;
    dholder.innerText = uid;
    console.log(dholder.innerText);
  }
});

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    activeUser = user.uid;
    getUserData(activeUser);
  } else {
    freebuy.href = "./backend/login.html";
    firstpaidbuy.href = "./backend/login.html";
    secondpaidbuy.href = "./backend/login.html";
    thirdpaidbuy.href = "./backend/login.html";
  }
});

async function free() {
  console.log("fdk");
  try {
    let newPrice = 0;
    await updateDoc(
      doc(db, "user", dholder.innerText),
      {
        subscription: newPrice,
      }
      // { merge: true }
    );
    alert("You are subscribed to the free plan");
    window.location.replace("../courses.html");
  } catch (err) {
    console.log(err.message);
  }
}

async function firstbuy() {
  console.log("fdk");
  try {
    let newPrice = 19;
    await updateDoc(
      doc(db, "user", dholder.innerText),
      {
        subscription: newPrice,
      }
      // { merge: true }
    );
    alert("You are subscribed to the Business plan");

    window.location.replace("../courses.html");
  } catch (err) {
    console.log(err.message);
  }
}

async function secondbuy() {
  console.log("fdk");
  try {
    let newPrice = 29;
    await updateDoc(
      doc(db, "user", dholder.innerText),
      {
        subscription: newPrice,
      }
      // { merge: true }
    );
    alert("You are subscribed to the Developer plan");

    window.location.replace("../courses.html");
  } catch (err) {
    console.log(err.message);
  }
}
async function thirdbuy() {
  console.log("fdk");
  try {
    let newPrice = 49;
    await updateDoc(
      doc(db, "user", dholder.innerText),
      {
        subscription: newPrice,
      },
      { merge: true }
    );
    alert("You are subscribed to the Ultimate plan");
    window.location.replace("../courses.html");
  } catch (err) {
    console.log(err.message);
  }
}
