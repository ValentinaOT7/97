var firebaseConfig = {
    apiKey: "AIzaSyDsqmkVWSCPzj8LLxKP-XRL2Hd9E2fNW3M",
    authDomain: "kwitter-a8a45.firebaseapp.com",
    databaseURL: "https://kwitter-a8a45-default-rtdb.firebaseio.com",
    projectId: "kwitter-a8a45",
    storageBucket: "kwitter-a8a45.appspot.com",
    messagingSenderId: "974273364428",
    appId: "1:974273364428:web:04032a1a99f2614e40dd69"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({hi : "hello"});
}