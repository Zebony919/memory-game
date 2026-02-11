import { useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="main-body">
        <div className="heading">
          <h1>Memory Card Game</h1>
          <p>
            Remember the cards you pick, if you pick one card twice you lose!
          </p>
        </div>

        <ScoreBoard />
        <GameBoard />
      </section>
    </>
  );
}

export default App;
