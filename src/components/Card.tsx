import "../css/Card.css";

function Card({ src }: { src: string }) {
  return (
    <div className="card-container">
      <img className="card-image" src={src} alt="Minecraft Build Thumbnail" />
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
