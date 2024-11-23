import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Contact from "./Contact";
import User from "./User";
import Profile from "./Profile";

export const UserContext = createContext();

const users = [
  {name: 'abc xyz'},
  {name: 'qqqqqqq'}
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={users}>
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link> |{' '}
        <Link to='/contact'>Contact</Link> |{' '}
        <Link to='/user/1'>User 1</Link> |{' '}
        <Link to='/user/2'>User 2</Link> |{' '}
        <Link to='/profile'>Profile</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/user/:id"
          element={<User />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;