import React from 'react';
import diceImage from './dices.png'; 

const Start = ({ onStartGame }) => {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="img">
        <img src={diceImage} alt="Dice Game" /> 
      </div>
      <div className="d-flex align-items-center m-3 flex-column justify-content-center">
        <div className="display-1">DICE GAME</div>
        <button className="btn btn-dark m-4" style={{ width: '100px' }} onClick={onStartGame}>Start</button>
      </div>
    </div>
  );
};

export default Start;