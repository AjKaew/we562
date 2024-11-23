import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] 
  = useState(localStorage.getItem('username') ?? '');

  const handleLogin = () => {
    if (username === "admin") {
      localStorage.setItem('username', username);
      navigate("/dashboard");
    } else {
      localStorage.removeItem('username');
      alert("Invalid username! Try again.");
      setUsername('');
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Home;