import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = ({ players }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Function to handle player name click
  const handlePlayerClick = (player) => {
    if (players.indexOf(player) < 3) { // Only for the top 3 players
      setSelectedPlayer(player);
    }
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h2 className="leaderboard-title">Top Players</h2>
        <div className="leaderboard-description">Ranked by Score</div>
      </div>
      <div className="leaderboard-table">
        {players.map((player, index) => (
          <div
            key={player.id}
            className={`leaderboard-row ${index < 3 ? 'top-player-row' : ''}`}
          >
            <div className="player-rank">
              <span className={`rank-badge rank-${index + 1}`}>{index + 1}</span>
            </div>
            <div className="player-avatar">
              <img src={player.avatar} alt={player.name} className="avatar-img" />
            </div>
            <div className="player-name" onClick={() => handlePlayerClick(player)}>
              <span>{player.name}</span>
            </div>
            <div className="player-score">
              <span>{player.score}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for selected player */}
      {selectedPlayer && (
        <div className="player-popup">
          <div className="popup-content">
            <span className="close-popup" onClick={closePopup}>&times;</span>
            <h3>{selectedPlayer.name}'s Stats</h3>
            <div>Games Played: {selectedPlayer.gamesPlayed}</div>
            <div>Win Rate: {selectedPlayer.winRate}%</div>
            <div>High Score: {selectedPlayer.highScore}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
