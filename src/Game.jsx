import React, { useState } from 'react';
import Box from './Box';
import img1 from './dice_1.png';
import img2 from './dice_2.png';
import img3 from './dice_3.png';
import img4 from './dice_4.png';
import img5 from './dice_5.png';
import img6 from './dice_6.png';
import Rules from './Rules';
import './App.css'

const Game = () => {
  const diceNumbers = [1, 2, 3, 4, 5, 6];
  const img = [img1, img2, img3, img4, img5, img6];

  const [currentDice, setCurrentDice] = useState(img1);
  const [nu, setNu] = useState(null);
  const [ru, setRu] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [dicei, setDicei] = useState(0);

  const seldice = (num) => {
    setNu(num);
    console.log("Selected number is " + num);
  };

  const reset = () => {
    setTotalScore(0);
  };

  const roll = () => {
    const randomIndex = Math.floor(Math.random() * img.length);
    setDicei(randomIndex);
    const newDice = img[randomIndex];
    setCurrentDice(newDice);

    // Check if the selected number matches the rolled number
    const rolledNumber = randomIndex + 1; // diceNumbers are 1-indexed
    if (nu === rolledNumber) {
      setTotalScore((prevTotalScore) => prevTotalScore + rolledNumber);
    }
  };

  const show = () => {
    setRu((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <div className="header d-flex justify-content-between">
          <div className="display-4">Total: {totalScore}</div>
          <div className="display-1 d-flex">
            {diceNumbers.map((number, index) => (
              <Box
                key={index}
                value={number}
                onClick={seldice}
                selected={nu === number}
              />
            ))}
          </div>
        </div>
        <div className="d-flex flex-column m-2">
          <div className="main d-flex flex-column justify-content-center align-items-center m-2">
            <img
              className="m-2"
              src={currentDice}
              alt="Dice Image"
              style={{ height: '200px', width: '200px' }}
            />
            <div className="display-4 m-2" onClick={roll}>
              Click To Dice Roll
            </div>
            <button className="btn btn-outline-dark m-2" onClick={reset}>
              Reset Score
            </button>
            <button className="btn btn-dark m-2" onClick={show}>
              {ru ? 'Hide Rules' : 'Show Rules'}
            </button>
          </div>
        </div>
      </div>
      {ru && <Rules />}
    </>
  );
};

export default Game;
