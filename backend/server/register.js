import {
  doc,
  setDoc,
} from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-firestore.min.js";

import {
  createUserWithEmailAndPassword,
  getAuth,
} from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js";

import { app, db } from "./auth.js";

const auth = getAuth(app);

let registerNow = document.getElementById("btnregister");
let regNav = document.getElementById("btnregisternav");
regNav.style.display = "none";

registerNow.addEventListener("click", () => {
  register();
});

async function register() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let fullname = document.getElementById("fullname").value;
  let userStatus = document.getElementById("status").value;

  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    let userId = data.user.uid;
    await setDoc(doc(db, "user", userId), {
      name: fullname,
      email: email,
      status: userStatus,
      // subscription: "none",
      // freesub: 0,
      // firstpaidsub: 19,
      // secondpaid: 29,
      // thirdpaid: 49,
    });
    alert("Account Created Succesfully");
    // localStorage.setItem("activeUser", JSON.stringify(userId));
    window.location.replace("../courses.html");
  } catch (err) {
    if (err.message == "Firebase: Error (auth/email-already-in-use).") {
      alert("Email is taken");
    } else if (
      err.message ==
      "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      alert("Password too short");
    } else if (err.message == "Firebase: Error (auth/invalid-email).") {
      alert("invalid Email");
    }
    console.log(err.message);
  }
}
