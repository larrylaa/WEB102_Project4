import React from 'react';
import './banlist.css';

const Banlist = (props) => {
  return (
    <>
      <div className='banList'>
        <div className='banListContent'>
          <h1>Ban List</h1>
          <p>Select an attribute on the listing to ban it!</p>

          <div className='bannedItems'>
            {props.bannedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banlist;
