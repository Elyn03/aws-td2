// src/404.js
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/s" style={{ fontSize: "1rem", color: "#007BFF" }}>
        Go back home
      </Link>
    </div>
  );
}
