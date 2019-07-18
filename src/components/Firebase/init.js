import firebase from 'firebase';
import firestore from 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDHj15XzpD4lM8SnqE8u0kTE2uVrwA6RVc",
    authDomain: "jubilee-rentals-30517.firebaseapp.com",
    databaseURL: "https://jubilee-rentals-30517.firebaseio.com",
    projectId: "jubilee-rentals-30517",
    storageBucket: "",
    messagingSenderId: "50186467811",
    appId: "1:50186467811:web:de149df6115feff1"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore.settings({timesStampInSnapShots: true});
  export default firebaseApp.firestore();