import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Come onnn.. think about it!",
  "I'm gonna tear up..",
  "TAVIE PLEASE!",
  "You're breaking my heart ):!",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {/* Background audio */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/fPgfBpxQGmc?autoplay=1&loop=1&playlist=fPgfBpxQGmc"
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
        style={{ position: "absolute", left: "-9999px" }}
        title="Background Music"
      ></iframe>

      {yesPressed ? (
        <>
          <img
            alt="simon and jeanette"
            src="https://i.pinimg.com/originals/87/87/01/87870147d1cd66ee6b2b9cf112708438.gif"
          />
          <div
            className="text"
            style={{
              fontFamily: "'Comic Sans MS', cursive, sans-serif",
              fontSize: "24px",
              color: "#ff69b4",
              textShadow: "2px 2px 4px #ff1493",
              marginTop: "20px",
            }}
          >
            HIP HIP HOORAYYY!!!
          </div>
        </>
      ) : (
        <>
          <img
            alt="simon with rose"
            src="https://i.ibb.co/ZV7LwGC/Picsart-25-01-15-13-46-32-042.jpg" // Replace with a valid image URL
          />
          <div
            style={{
              fontFamily: "'Comic Sans MS', cursive, sans-serif",
              fontSize: "20px",
              color: "#ff69b4",
              textShadow: "1px 1px 3px #ff1493",
              margin: "10px 0",
            }}
          >
            Will you be my Valentine?
          </div>
          <div>
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                fontFamily: "'Lobster', cursive",
                backgroundColor: "#32CD32",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              onClick={() => setYesPressed(true)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#28a745")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#32CD32")}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="noButton"
              style={{
                fontFamily: "'Lobster', cursive",
                backgroundColor: "#FF4500",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e03c00")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF4500")}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
