import React from 'react';
import './Leaderboard.css'; 

const Leaderboard = ({ players }) => {
  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">Leaderboard</h2>
      {players.map((player, index) => (
        <div
          key={player.id}
          className={`player-card ${index < 3 ? 'top-player' : ''}`} 
        >
          <div className="player-info">
            <span className="player-rank">{index + 1}</span>
            <img
              src={player.avatar}
              alt={player.name}
              className={`player-avatar ${index === 0 ? 'first-place' : ''}`}
            />
            <span className="player-name">{player.name}</span>
          </div>
          <div className="player-score">{player.score}</div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
