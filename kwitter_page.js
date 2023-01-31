//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDZ0UeA2-XbUtB5Te_GVgxq14mBwZuZyYM",
      authDomain: "qwitter-49447.firebaseapp.com",
      databaseURL: "https://qwitter-49447-default-rtdb.firebaseio.com",
      projectId: "qwitter-49447",
      storageBucket: "qwitter-49447.appspot.com",
      messagingSenderId: "677048219615",
      appId: "1:677048219615:web:bda1a7e1b38ca0c060f66a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      }) 

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      room_name.removeItem("room_name");
      window.location = "index.html";

}