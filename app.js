// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function (e) {
  e.preventDefault();
  var obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    console.log(success.user.uid)
  })
  .catch(function(err){
    console.log(err)
  });

  console.log(obj);

  window.location.href = "login.html";
};