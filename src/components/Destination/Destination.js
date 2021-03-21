import React from "react";
import './Destination.css';


const Destination = () => {

    return (
        <div className= "container d-lg-flex">
            <div className="search-field col-lg-6">
                <div className="searchContainer">
                    <label>From</label>
                    <input type="text" required/>
                    <label>To</label>
                    <input type="text" required/>
                    <div className="btnContainer">
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <div className="ms-5 col-lg-6 mt-5">
              <h1>Good Morning</h1>
            </div>
        </div>
    );
};

export default Destination;