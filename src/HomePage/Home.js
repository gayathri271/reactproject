import React, { useState } from "react";
import "./Home.css";

const PopQuizzer = () => {
  const [showScores, setShowScores] = useState(false);
  const [liveQuizzes, setLiveQuizzes] = useState(5);
  
  return (
    <div>
      <nav className="navbar">
        <h1>PopQuizzer</h1>
        <div className="nav-buttons">
          <button onClick={() => setShowScores(!showScores)}>Top Scores</button>
          <button>Logout</button>
        </div>
      </nav>
      
      {showScores && (
        <div className="leaderboard-preview">
          <h3>Leaderboard</h3>
          <ul>
            <li>1. Player A - 1500 pts</li>
            <li>2. Player B - 1350 pts</li>
            <li>3. Player C - 1200 pts</li>
          </ul>
        </div>
      )}
      
      <header>
        <h2 style={{textAlign:"center",margin:"50px"}}>How does PopQuizzer work?</h2>
      </header>
      
      <section className="quiz-options">
        <div className="option create">
          <img src="https://ahaslides.com/wp-content/uploads/2023/02/SEO2303-thumb.webp" alt="Create"  width={280}/>
          <h3>Create</h3>
          <p>It only takes minutes to create a learning game or trivia quiz on any topic.</p>
        </div>
        <div className="option host">
          <img src="https://www.shutterstock.com/image-vector/cartoon-people-guessing-quiz-questionsintellectual-260nw-1396272737.jpg" alt="Host or Share" width={200}/>
          <h3>Host or Share</h3>
          <p>Host a live game with questions on a big screen or share a game with remote players.</p>
        </div>
        <div className="option play">
          <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/329437302/original/cfcf48f53663d56bfb03c4f57ac1a45a0e58fb85/make-illustrative-quiz-game-presentation-for-children.jpg" alt="Play" width={200} />
          <h3>Play</h3>
          <p>Join a quiz with a PIN provided by the host and answer questions on your device.</p>
        </div>
      </section>
      
      <section className="live-quizzes">
        <h3>Live Quizzes</h3>
        <p>Currently Active: {liveQuizzes}</p>
      </section>
      
      <footer>
        <p>&copy; 2025 PopQuizzer. Challenge Your Friends, Rule the Leaderboard!</p>
      </footer>
    </div>
  );
};

export default PopQuizzer;



