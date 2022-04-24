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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser()
{
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
          });

      window.location="kwitter_room.html";
}

