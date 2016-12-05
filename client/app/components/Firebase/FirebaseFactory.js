import firebase from 'firebase';

 /*ngInject*/
 let FirebaseFactory = function() {
  var config = {
      apiKey: "AIzaSyDbWVEW9A4NKF85unGhutdEcOBVJ1gfwls",
      authDomain: "bookstore-a15da.firebaseapp.com",
      databaseURL: "https://bookstore-a15da.firebaseio.com",
      storageBucket: "bookstore-a15da.appspot.com",
      messagingSenderId: "1028660064043"
    };
    firebase.initializeApp(config);
    return firebase;
 };

 export default FirebaseFactory;