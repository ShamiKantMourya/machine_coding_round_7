import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { data } from '../database';

const Destination = () => {
  const {continentId, countryId } = useParams();
  // console.log(continentId);
  const navigate = useNavigate();

  const findContinent = data.continents.find((con) => con.id === Number(continentId));
  const findCountry = findContinent.countries.find((con) => con.id === Number(countryId));
  // console.log(findCountry, "hello")
  // console.log(findContinent, "hello");
  const destination  = findCountry.destinations;
  return (
    <div>
      <button className='' onClick={() => navigate(-1)}>Back</button>
      <div className='conatiner'>
        <h1>Welcome To Trip Advisor</h1>
        <h3>Top Countries in {findCountry.name} for your next holiday</h3>
      </div>
      {
        destination.map(({ id, name, image }) =>
          <div className='box' key={id}>
            <div className='img-box'>
              <Link to={`/${continentId}/${countryId}/${id}`}>
                <img src={image} alt='continent' />
              </Link>
            </div>
            <h3 className='txt'>{name}</h3>
          </div>
        )
      }
    </div>
  )
}

export default Destination;