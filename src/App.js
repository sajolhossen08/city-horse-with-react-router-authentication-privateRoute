import './App.css';
import React, { useEffect, useState } from 'react';
import fire from './firebaseConfig/firebaseConfig'
import "firebase/auth";
import firebase from "firebase/app";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'


function App() {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [haveAccount, setHaveAccount] = useState(false);


    const handleLogInByGoogle=()=>{
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
      var user = result.user;
      setUser(user);
      }).catch((error) => {
      console.log(error);
    });
    }


    const clearInputs =() =>{
        setEmail('');
        setPassword('');
    }

    const clearError = () =>{
        setEmailError('');
        setPasswordError('');
    }

    const handleLogIn = () =>{
        clearError();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };
     
    const handleSignUp = () =>{
        clearError();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });   
    };

    const handleSignOut = ()=>{
        fire.auth().signOut();
    };

    const authListener =()=>{
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser('');
            }
        });
    };

    useEffect(() =>{
        authListener();
    });


  return (
      <Router>
        <Header user ={user} handleSignOut = {handleSignOut}/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            {user ? (
              <Home />
            ):(
              
            <LogIn 
            name = {name}
            setName = {setName}
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            handleLogIn = {handleLogIn}
            handleSignUp = {handleSignUp}
            haveAccount = {haveAccount}
            setHaveAccount = {setHaveAccount}
            emailError = {emailError}
            passwordError = {passwordError}
            handleLogInByGoogle ={handleLogInByGoogle}
            />
            )}
          </Route>
          <PrivateRoute user = {user} path="/destination">
            <Destination/>
            </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
