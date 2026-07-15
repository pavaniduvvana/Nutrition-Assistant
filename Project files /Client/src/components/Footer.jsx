import { useLocation } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register"
  ) {
    return null;
  }

  return (
    <footer className="footer">
      <p>🥗 Nutrition Assistant © 2026</p>

      <p>
        Built with React, Node.js, Express,
        and MongoDB
      </p>
    </footer>
  );
}