import React, { useState } from 'react';
import Start from './Start';
import Game from './Game';

function App() {
  const [gameState, setGameState] = useState('start'); 

  const handleStartGame = () => {
    setGameState('game');
  };

  return (
    <>
      {gameState === 'start' && <Start onStartGame={handleStartGame} />}
      {gameState === 'game' && <Game />}
    </>
  );
}

export default App;