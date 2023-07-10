import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { data } from "../database";

const Places = () => {
  const { continentId, countryId, destinationId } = useParams();
  const navigate = useNavigate();

  const findContinent = data.continents.find((con) => con.id === Number(continentId));
  const findCountry = findContinent.countries.find((coun) => coun.id === Number(countryId));
  const findDestination = findCountry.destinations.find((dest) => dest.id === Number(destinationId));
  console.log(findDestination);

  const { id, name, description, image, ratings } = findDestination;

  return (
    <div>
      <button className='' onClick={() => navigate(-1)}>Back</button>
      <div className='conatiner'>
        <h1>{findDestination.name}</h1>
      </div>
      <div className='place-container' key={id}>
        <div className='place-box'>
          <div className='img-box'>
            <img src={image} alt={name} />
          </div>
          <div className='details'>
          <p className='description'>Description: {description}</p>
          <p className='rating'>Rating: {ratings}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Places;