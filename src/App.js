import React from 'react';
import Leaderboard from './Leaderboard'; // Import the Leaderboard component

function App() {
  const players = [
    { id: 1, name: 'Alice', score: 1200, avatar: 'https://example.com/alice.jpg' },
    { id: 2, name: 'Bob', score: 1150, avatar: 'https://example.com/bob.jpg' },
    { id: 3, name: 'Charlie', score: 1100, avatar: 'https://example.com/charlie.jpg' },
    { id: 4, name: 'Daisy', score: 1050, avatar: 'https://example.com/daisy.jpg' },
    { id: 5, name: 'Eve', score: 1000, avatar: 'https://example.com/eve.jpg' },
  ];

  return (
    <div className="App">
      <Leaderboard players={players} /> 
    </div>
  );
}

export default App;
