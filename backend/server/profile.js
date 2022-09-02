import {
  onAuthStateChanged,
  signOut,
  getAuth,
} from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js";

import {
  doc,
  getDoc,
  collection,
  addDoc,
  setDoc,
  updateDoc,
} from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js";

import { auth, db } from "./auth.js";

let coursesection = document.getElementById("coursection").value;
let courseduration = document.getElementById("courseduration").value;
let coursetitle = document.getElementById("coursetitle").value;
let coursearticle = document.getElementById("coursearticle").value;
let courseprice = document.getElementById("courseprice").value;

let activeUser = "";

let nameOfTrainer = document.getElementById("trainerName");
let btnsave = document.getElementById("btnsave");

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    activeUser = user.uid;
    getUserData(activeUser);

    // regbutton.style.display = "none";
    // loginbutton.style.display = "none";
    // logoutbutton.style.display = "inline-block";
    // floatReg.style.display = "none";
  } else {
    // regbutton.style.display = "inline-block";
    // loginbutton.style.display = "inline-block";
    // floatReg.style.display = "inline-block";
  }
});
async function saveCourse() {
  let trainerName = nameOfTrainer.value;
  console.log("fdk");
  try {
    await addDoc(
      collection(db, "courses"),
      {
        trainer: trainerName,
        courseduration: courseduration.value,
        coursesection: coursesection.value,
        coursetitle: coursetitle.value,
        coursearticle: coursearticle.value,
        courseprice: courseprice.value,
      },
      { merge: true }
    );
    alert("You are subscribed to the free plan");
    window.location.replace("../courses.html");
  } catch (err) {
    console.log(err.message);
  }
}
let User = {};

async function getUserData(userId) {
  const docRef = doc(db, "user", userId);
  const userData = await getDoc(docRef);
  User = userData.data();
  if (User.status == "Student") {
    document.querySelector(
      "body"
    ).innerHTML = `<h1>err0r 404, we nur see am, wetin u sef dey find gan?</h1>`;
  } else if (User.status == "Tutor") {
    nameOfTrainer.value = User.name;
  }
}

btnsave.addEventListener("click", saveCourse);
