var firebaseConfig = {
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
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })