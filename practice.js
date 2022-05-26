
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAQkU7w-G0GAPohhSMVlmLMr470paBctxs",
    authDomain: "kwitter-a9b6a.firebaseapp.com",
    databaseURL: "https://kwitter-a9b6a-default-rtdb.firebaseio.com",
    projectId: "kwitter-a9b6a",
    storageBucket: "kwitter-a9b6a.appspot.com",
    messagingSenderId: "128529213743",
    appId: "1:128529213743:web:7e372fe5994e43ea3959da",
    measurementId: "G-WL7SFWNHPR"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 

 function adduser(){
     username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        purpose : "add_user"
    });
 }