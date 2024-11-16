import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FlipCard.css';

// Component ใช้การ export แบบ named export
export function FlipCard({ username, email, bio }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`card flip-card ${isOn ? 'flipped' : ''}`}
      onClick={() => setIsOn(!isOn)}
      style={{ width: '18rem', cursor: 'pointer' }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front card-body">
          <h5 className="card-title">{username}</h5>
          <p className="card-text">Email: {email}</p>
        </div>
        <div className="flip-card-back card-body">
          <h5 className="card-title">About {username}</h5>
          <p className="card-text">{bio}</p>
        </div>
      </div>
    </div>
  );
}