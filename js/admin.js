  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBzMTZPB2tzIP7bS7CB2hlG9UvCR3S0Ad8",
    authDomain: "space-eb236.firebaseapp.com",
    databaseURL: "https://space-eb236-default-rtdb.firebaseio.com",
    projectId: "space-eb236",
    storageBucket: "space-eb236.appspot.com",
    messagingSenderId: "151524331615",
    appId: "1:151524331615:web:2640fa9689f962e12a4bea",
    measurementId: "G-1Q25NZ6RBF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

 

logIn.addEventListener('click',(e)=>
{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if(email!="spacedoc@gmail.com"){
    alert('Email should be same as given below');
    return;
  }
if(password!="SpaceDoc@#!"){
    alert('Password should be same as given below');
    return;
  }
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const dt = new Date();
    update(ref(database,'users/'+user.uid),{
    last_login:dt

  })
  alert('Admin Successfully Logged in!!');
  location.replace("space.html");
/*
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.username);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }*/

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  })

});



