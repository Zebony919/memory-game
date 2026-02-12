import { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function handleCardClick(cardId) {
    if (clickedCards.includes(cardId)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      setCurrentScore(currentScore + 1);
      setClickedCards([...clickedCards, cardId]);
    }
  }

  return (
    <>
      <section className="main-body">
        <div className="heading">
          <h1>Memory Card Game</h1>
          <p>
            Remember the cards you pick, if you pick one card twice you lose!
          </p>
        </div>

        <ScoreBoard currentScore={currentScore} bestScore={bestScore} />

        <GameBoard onCardClick={handleCardClick} />
      </section>
    </>
  );
}

export default App;
