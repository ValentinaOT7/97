// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "Adding RoomName"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name :" + Room_names);
       row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}