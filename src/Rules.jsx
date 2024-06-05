
import React from 'react';

const Rules = () => {
  return (
    <div className="container text-center">
      <h1>Game Rules</h1>
      <p>Welcome to the Dice Game! Here are the rules:</p>
      <ul style={{ listStyleType: 'none' }}>
        <li >Select a number between 1 and 6.</li>
        <li>Click on "Click To Dice Roll" to roll the dice.</li>
        <li>If the dice shows the number you selected, you win points equal to the number shown on the dice.</li>
        <li>If the dice shows a different number, no points are added.</li>
        <li>Click "Reset Score" to reset your total score to zero.</li>
      </ul>
    </div>
  );
};

export default Rules;