import React from 'react';
import './Home.css';
import riders from '../../fakeData/fakeData.json';
import Rider from '../Rider/Rider';

const Home = () => {
    return (
        <div className="home">
            <section className="container home-section">
                <div className="row">
                    <h1>Welcome to City Horse</h1>
                    <h4>Select your rider---></h4>
                    {
                        riders.map(rider => <Rider key={rider.id} rider ={rider}></Rider>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;