import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const user =
    currentUser?.user || currentUser;

  // Hide navbar on public pages
  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register"
  ) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("water");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>🥗 Nutrition Assistant</h2>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/my-plans">Meal Plans</Link>
        <Link to="/new-suggestion">
          AI Suggestions
        </Link>
      </div>

      <div className="user-section">
        <div className="avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <span>
          Hi, {user?.name}
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}