import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin") {
      setIsLoggedIn(true); // อัปเดตสถานะล็อกอิน
      navigate("/dashboard"); // เปลี่ยนเส้นทางไป Dashboard
    } else {
      alert("Invalid username! Try again.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
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

export default Login;