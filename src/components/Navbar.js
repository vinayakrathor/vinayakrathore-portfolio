import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;