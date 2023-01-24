
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCgMm2Bna_QqEDffEtFeoGQSF4pF7TjYuE",
      authDomain: "lets-chat-15f62.firebaseapp.com",
      databaseURL: "https://lets-chat-15f62-default-rtdb.firebaseio.com",
      projectId: "lets-chat-15f62",
      storageBucket: "lets-chat-15f62.appspot.com",
      messagingSenderId: "248933446181",
      appId: "1:248933446181:web:03358ffdfea8b6845105cc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
