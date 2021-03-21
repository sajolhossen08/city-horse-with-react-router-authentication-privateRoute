import React from "react";
import './Destination.css';


const Destination = () => {


    return (
        <div className= "container d-lg-flex">
            <div className="search-field col-lg-6">
                <div className="searchContainer">
                    <label>From</label>
                    <input type="text" placeholder = "Enter your starting destination" required/>
                    <label>To</label>
                    <input type="text" placeholder = "Enter your ending destination" required/>
                    <div className="btnContainer">
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <hr/>
          <div className="col-lg-6 mt-5 mb-5">
          <div class="mapouter">
            <div class="google-map-canvas">
              <iframe width="100%" height="469" src={"https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
          </div>
          </div>
        </div>
    );
};

export default Destination;