var firebaseConfig = {
      apiKey: "AIzaSyAtehXowS7IFwQVM8JcY9XWNB41Y6LUkXM",
      authDomain: "kwitter-efd56.firebaseapp.com",
      databaseURL: "https://kwitter-efd56-default-rtdb.firebaseio.com",
      projectId: "kwitter-efd56",
      storageBucket: "kwitter-efd56.appspot.com",
      messagingSenderId: "892772909322",
      appId: "1:892772909322:web:828cb132a26094f2897af3",
      measurementId: "G-Z4NGM9NCHQ"

    };
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });
      
      localStorage.setItem("room _name", room_name);

      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
