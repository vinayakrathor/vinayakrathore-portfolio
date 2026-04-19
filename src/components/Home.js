import React from "react";
import profile from "../profile.png";

function Home() {
  return (
    <section className="home" id="home">
      
      {/* Left Side */}
      <div className="home-text">
        <h1>
          Hi, I'm <span className="highlight">Your Name</span>
        </h1>

        <p>
          B.Tech Graduate (2025) | Frontend Developer  
          Passionate about building modern, responsive and user-friendly web applications using React.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" download>
            <button className="btn-primary">Download Resume</button>
          </a>

          <a href="#contact">
            <button className="btn-outline">Contact Me</button>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="home-image">
        <img src={profile} alt="profile" />
      </div>

    </section>
  );
}

export default Home;