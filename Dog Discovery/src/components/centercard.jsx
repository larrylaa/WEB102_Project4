import React, { useState } from 'react';
import './centercard.css';
import Banlist from './banlist.jsx';

const Centercard = () => {
  const [dogData, setDogData] = useState(null);
  const [bannedItems, setBannedItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_hBQGxn5Nv4ISChG6yklm1giJGMhlVKfnAlCsIYCa9fDb1V1PbzwKVOlnZMDRnW1o");
      const data = await response.json();

      const imageUrl = data[0].url;
      const breedGroup = data[0].breeds[0].breed_group;
      const lifeSpan = data[0].breeds[0].life_span;
      const name = data[0].breeds[0].name;
      const weight = data[0].breeds[0].weight.imperial;

      setDogData({ imageUrl, lifeSpan, breedGroup, name, weight});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToBanlist = (item) => {
    setBannedItems([...bannedItems, item]);
  };

  return (
    <div className='centerCard'>
      <div className='centralText'>
        <h1>Dog Discovery</h1>
        <h3>Find your ideal dog breed!</h3>

        {dogData && (
          <>
            <h2>{dogData.name}</h2>
            <button onClick={() => addToBanlist(dogData.lifeSpan)}>{dogData.lifeSpan}</button>
            <button onClick={() => addToBanlist(dogData.breedGroup)}>{dogData.breedGroup}</button>
            <button onClick={() => addToBanlist(`${dogData.weight} lbs`)}>{dogData.weight} lbs</button>
            <img className='standardImg' src={dogData.imageUrl} alt={dogData.name} />
          </>
        )}

        <Banlist bannedItems={bannedItems} />
        <button onClick={fetchData}>🔀 Discover</button>
      </div>
    </div>
  );
};

export default Centercard;
