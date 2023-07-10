import React from 'react';
import { data } from "../database";
import { useNavigate, useParams, Link } from 'react-router-dom';

import "./Page.css";

const CountryPage = () => {
    const { continentId } = useParams();
    const navigate = useNavigate();

    const findContinent = data.continents.find((con) => con.id === Number(continentId));
    // console.log(findContinent);
    const country = findContinent.countries;
    // console.log(country);

    return (
        <div>
            <button className='' onClick={() => navigate(-1)}>Back</button>
            <div className='conatiner'>
                <h1>Welcome To Trip Advisor</h1>
                <h3>Top Countries in {findContinent.name} for your next holiday</h3>
            </div>
            {
                country.map(({ id, name, image }) =>
                    <div className='box' key={id}>
                        <div className='img-box'>
                            <Link to={`/${continentId}/${id}`}>
                            <img src={image} alt='continent' />
                            </Link>
                        </div>
                        <h3 className='txt'>{name}</h3>
                    </div>
                )
            }
        </div >
    )
}

export default CountryPage;