import React from 'react';
import './Rider.css';
import { Link } from "react-router-dom";

const Rider = (props) => {
    const {name, imageURL} = props.rider;

    return (
        <>
            <div className="col-md-4 col-lg-2 col-sm-12 my-1 mx-1  text-center shadow bg-white rounded">
                <Link className="rider-link" to="/destination">
                    <div className="card border-0">
                        <div className="card-body">
                        <img className= "player-image" src={imageURL} alt="..."/>
                        <h5 className="card-title">{name}</h5>
                        </div>
                    </div>
                </Link>
            </div>  
        </>
    );
};

export default Rider;