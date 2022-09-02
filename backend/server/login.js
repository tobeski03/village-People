import {
  getAuth,
  signInWithEmailAndPassword,
} from "https:/cdnjs.cloudflare.com/ajax/libs/firebase/9.9.2/firebase-auth.min.js";

import { app } from "./auth.js";

// let activeUser = JSON.parse(localStorage.getItem("activeUser")) || null;
// if (activeUser) {
//   window.location.replace("../dashboard.html");
// }

const auth = getAuth(app);

let loginBtn = document.getElementById("btnlogin");
let loginNav = document.getElementById("btnloginnav");
loginNav.style.display = "none";

loginBtn.addEventListener("click", () => {
  Login();
});

async function Login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    window.location.replace("../pricing.html");
  } catch (err) {
    if (err.message == "Firebase: Error (auth/user-not-found).") {
      alert("User does not exist");
    }
    console.log(err.message);
  }
}
