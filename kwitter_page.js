//YOUR FIREBASE LINKS
apiKey: "AIzaSyCgMm2Bna_QqEDffEtFeoGQSF4pF7TjYuE",
      authDomain: "lets-chat-15f62.firebaseapp.com",
      databaseURL: "https://lets-chat-15f62-default-rtdb.firebaseio.com",
      projectId: "lets-chat-15f62",
      storageBucket: "lets-chat-15f62.appspot.com",
      messagingSenderId: "248933446181",
      appId: "1:248933446181:web:03358ffdfea8b6845105cc"

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
