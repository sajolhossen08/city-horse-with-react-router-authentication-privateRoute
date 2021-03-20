import React from 'react';
import './LogIn.css'

const LogIn = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogIn,
        handleSignUp,
        haveAccount,
        setHaveAccount,
        emailError,
        passwordError,
        handleLogInByGoogle
    } = props;

    
    return (
        <div>
            <div>
                <button className = "google-btn" onClick = {handleLogInByGoogle}>Sign in with google</button>
            </div>
            <hr/>
            <p className="text-center">or</p>
            <section className="login">
                <div className="loginContainer">
                    <label>Email</label>
                    <input type="text" required value = {email} onChange= {(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input type="password" required value = {password} onChange= {(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {haveAccount ? (
                            <>
                                <button onClick = {handleLogIn}>Log In</button>
                                <p>Don't have an account ? <span onClick = {() => setHaveAccount (!haveAccount)}> Sign up </span></p>
                            </>
                        ):(
                            <>
                                <button onClick= {handleSignUp}>Sign up</button>
                                <p>Have an account ? <span onClick = {() => setHaveAccount (!haveAccount)}>Log In</span></p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LogIn;