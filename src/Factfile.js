import React, { useState } from 'react';
import members from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Factfile = () => {
  const [index, setIndex] = useState(0);
  const { name, birthdate, nationality, zodiac, colour, img } = members[index];
  return (
    <article className="factfile">
      <div className="factfile-info">
        <img src={img} alt={name} />
        <div className="factfile-text">
          <p>Full Name: {name}</p>
          <p>Birth Date: {birthdate}</p>
          <p>Nationality: {nationality}</p>
          <p>Star Sign: {zodiac}</p>
          <p>Official Colour: {colour}</p>
        </div>
        <div className="button-container">
          <button className="left"><FaChevronLeft /></button>
          <button className="random">Random</button>
          <button className="right"><FaChevronRight /></button>
        </div>
      </div>

    </article>
  )
}

export default Factfile;