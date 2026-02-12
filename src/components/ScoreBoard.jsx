import { useState } from "react";
import "./ScoreBoard.css";

function ScoreBoard({ currentScore, bestScore }) {
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
