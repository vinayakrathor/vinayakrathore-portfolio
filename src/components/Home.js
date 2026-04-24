import React from "react";
import profile from "../profile.png";

function Home() {
  return (
    <section className="home" id="home">
      
      {/* Left Side */}
      <div className="home-text">
        <h1>
          Hi, I'm <span className="highlight">Vinayak Rathore</span>
        </h1>

        <p>
         B.Tech Computer Science (Data Science) Graduate (2025) with hands-on experience in Python, Data Analysis, and Machine Learning projects. Currently expanding skills in React and Full Stack Development to build scalable and modern web applications.
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