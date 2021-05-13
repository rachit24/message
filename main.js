var firebaseConfig = {
    apiKey: "AIzaSyB-8Q3zmQ35j1guFHbltui5VmMg0aFgIdc",
    authDomain: "login-c8f55.firebaseapp.com",
    databaseURL: "https://login-c8f55-default-rtdb.firebaseio.com",
    projectId: "login-c8f55",
    storageBucket: "login-c8f55.appspot.com",
    messagingSenderId: "22138517902",
    appId: "1:22138517902:web:1f36e083979d58a00b4cdf",
    measurementId: "G-G42ET9F6BW"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  //Refernce
var messagesRef = firebase.database().ref('messages'); 

//Form Sumbit

document.getElementById('contact').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    var username = getVal('username');
    // var password = getVal('password');
    var phone = getVal('phone');
    var email = getVal('email');
    var message = getVal('message');
    
    //Save messages
    saveMessage(username,phone,email,message);
}

//Get form values

function getVal(id){
    return document.getElementById(id).value;
}

//Save Message to firebase

function saveMessage(username, phone, email, message){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        username: username,
        phone: phone,
        email: email,
        message: message
    });
}
