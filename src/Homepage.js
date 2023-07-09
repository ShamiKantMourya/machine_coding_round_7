import React from 'react';
import { Link } from 'react-router-dom';

import {data} from "./database";
import "./Homepage.css";

const Homepage = () => {

console.log(data.continents);
const continent = data.continents;
// console.log(continent);

    return (
        <div>
            <div className='conatiner'>
                <h1>Welcome To Trip Advisor</h1>
                <h3>Top continents for your next holiday</h3>
            </div>
            <div className='continent'>
                {
                    continent.map(({id, name, image}) => 
                    <div className='box' key={id}>
                        <div className='img-box'>
                            <img src= {image} alt='continent' />
                            </div>
                            <h3 className='txt'>{name}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Homepage;