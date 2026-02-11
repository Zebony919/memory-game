import { useEffect, useState } from "react";
import { fetchCarImages } from "../api/pixabay.js";
import "./GameBoard.css";

function GameBoard() {
  const images = fetchCarImages();

  return (
    <section className="gameBoard-body">
      <h2>Im a gameboard</h2>
    </section>
  );
}

export default GameBoard;
