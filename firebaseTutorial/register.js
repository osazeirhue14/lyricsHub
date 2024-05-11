
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4urDLjMSwq7xgxTYiCB8vLMLGO79myDk",
  authDomain: "lyricshub-cfc75.firebaseapp.com",
  projectId: "lyricshub-cfc75",
  storageBucket: "lyricshub-cfc75.appspot.com",
  messagingSenderId: "298952165595",
  appId: "1:298952165595:web:8a361c6aa6db2888ef24fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault()
    const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging into Account...")
      window.location.href="mainpage.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  

})

