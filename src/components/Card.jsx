import "./Card.css";

function Card({ image, alt, onClick, id }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={alt} />
    </div>
  );
}

export default Card;
