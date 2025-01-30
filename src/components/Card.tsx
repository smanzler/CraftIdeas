import "../css/Card.css";

function Card() {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src="src\assets\ae0ff820b7d2738b668f2d7150b180cd.jpg"
        alt="Minecraft Build Thumbnail"
      />
      <div className="card-overlay">
        <div className="overlay-buttons">
          <button>View Details</button>
          <button>Like</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
