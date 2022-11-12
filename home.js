// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH1AiAiKcZGImsG7T7QXfJ8T5mn8s30Os",
    authDomain: "to-do-app-a44ec.firebaseapp.com",
    projectId: "to-do-app-a44ec",
    storageBucket: "to-do-app-a44ec.appspot.com",
    messagingSenderId: "1067598801849",
    appId: "1:1067598801849:web:4987ef5f7f54417b45e468",
    measurementId: "G-PMHYHE9KVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var arr = [];
var todoInp = document.getElementById("todoInp");
var parent = document.getElementById("parent");

function renderUL() {
  parent.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    parent.innerHTML += `<li>${arr[i].task}<br><span class='label'>${arr[i].time}<span></li>`;
  }
}

window.addTask = function (e) {
  e.preventDefault();
  var obj = {
    task: todoInp.value,
    time: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} T ${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
    userName: "ABC",
  };

  arr.push(obj);
  renderUL();
};

window.logout = function () {
  signOut(auth)
    .then(function () {
      console.log("Logout Successfully");
      window.location.href = "login.html";
    })
    .catch(function (err) {
      console.log(err);
    });
};

function checkAuthentication() {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
checkAuthentication();