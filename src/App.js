import React from 'react';
import Leaderboard from './Leaderboard'; // Import the Leaderboard component

function App() {
  const players = [
    { id: 1, name: 'Alice', score: 1200, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', gamesPlayed: 50, winRate: 60, highScore: 1500 },
    { id: 2, name: 'Bob', score: 1150, avatar: 'https://randomuser.me/api/portraits/men/30.jpg', gamesPlayed: 45, winRate: 65, highScore: 1400 },
    { id: 3, name: 'Charlie', score: 1100, avatar: 'https://randomuser.me/api/portraits/men/40.jpg', gamesPlayed: 55, winRate: 58, highScore: 1350 },
    { id: 4, name: 'Daisy', score: 1050, avatar: 'https://randomuser.me/api/portraits/women/50.jpg', gamesPlayed: 30, winRate: 70, highScore: 1300 },
    { id: 5, name: 'Eve', score: 1000, avatar: 'https://randomuser.me/api/portraits/women/60.jpg', gamesPlayed: 40, winRate: 62, highScore: 1250 },
  ];

  return (
    <div className="App">
      <Leaderboard players={players} /> {/* Pass players data to the component */}
    </div>
  );
}

export default App;
