import { useState } from "react";
import "./ScoreBoard.css";

function ScoreBoard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function AddCurrentScore() {
    setCurrentScore(currentScore + 1);
  }

  function resetCurrentScore() {
    setCurrentScore(0);
  }

  function handleBestScore() {
    setBestScore(currentScore);
  }

  return (
    <section className="score-body">
      <div className="currentScoreBody">
        <h2>Current Score: {currentScore}</h2>
      </div>

      <div className="bestScoreBody">
        <h2>Best Score: {bestScore}</h2>
      </div>
    </section>
  );
}

export default ScoreBoard;
