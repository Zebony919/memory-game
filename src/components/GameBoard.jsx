import { useEffect, useState } from "react";
import { fetchCarImages } from "../api/pixabay.js";
import { shuffleArray } from "../utils/shuffle.js";
import "./GameBoard.css";
import Card from "./Card.jsx";

function GameBoard() {
  const [cards, setCards] = useState([]);
  const clickedCards = [];

  useEffect(() => {
    const loadCards = async () => {
      const images = await fetchCarImages("cars", 12);
      console.log("Image array: ", images);
      setCards(images);
    };

    loadCards();
  }, []);

  const handleCardClick = (cardId) => {
    setCards((prevCards) => {
      const shuffled = shuffleArray(prevCards);
      return shuffled;
    });
  };

  return (
    <section className="gameBoard-body">
      {cards.slice(0, 5).map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.previewURL}
          alt={card.tags}
          onClick={handleCardClick}
        />
      ))}
    </section>
  );
}

export default GameBoard;
