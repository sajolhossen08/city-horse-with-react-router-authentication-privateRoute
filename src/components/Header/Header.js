import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = (props) => {
    const {name, user, handleSignOut} = props;
    
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark ">
            <div className="container-fluid container">
                <Link className="navbar-brand" to="/home">City Horse</Link>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <Link className="nav-link" to="/login" onClick ={handleSignOut}>Log Out</Link>
                            ):(
                                <Link className="nav-link" to="/login">Log In</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;