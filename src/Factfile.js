import React, { useState } from 'react';
import members from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Factfile = () => {
  const [index, setIndex] = useState(0);
  const { name, birthdate, nationality, zodiac, colour, img } = members[index];

  const checkNumber = (number) => {
    if (number > members.length - 1) {
      return 0;
    }
    if (number < 0) {
      return members.length - 1;
    }
    return number;
  }

  const nextMember = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  };

  const lastMember = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const randomMember = () => {
    let randomIndex = Math.floor(Math.random() * members.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  }

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
          <button className="left" onClick={lastMember}><FaChevronLeft /></button>
          <button className="random" onClick={randomMember}>Random</button>
          <button className="right" onClick={nextMember}><FaChevronRight /></button>
        </div>
      </div>

    </article>
  )
}

export default Factfile;