import React from "react";
import "../../Styles/Navbar.css";

const Navbar = ({ username }) => {
  return (
    <nav className="navbar">
      <h1>Welcome, {username}</h1>
    </nav>
  );
};

export default Navbar;
