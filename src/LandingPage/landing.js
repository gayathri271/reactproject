import './landing.css'
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate=useNavigate()
    return (
      <div className="container">
        <h1 className="title">Welcome to PopQuizzer!</h1>
        <div className="content">
          <p className="description">
            Get ready to challenge your knowledge and compete with friends!
          </p>
          <button className="start-button" onClick={()=>navigate('/signup')}>Get Started</button>
        </div>
      </div>
    );
  }
