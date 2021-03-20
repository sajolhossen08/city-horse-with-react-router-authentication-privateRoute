import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBA5J0msKNpt7JNlnMt40rN7rC3yKd-448",
    authDomain: "city-horse.firebaseapp.com",
    projectId: "city-horse",
    storageBucket: "city-horse.appspot.com",
    messagingSenderId: "353524093887",
    appId: "1:353524093887:web:20d132d09cbf979177870a"
  };


  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;