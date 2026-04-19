import React from "react";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>Personal portfolio built using React.</p>
      </div>

      <div className="project-card">
        <h3>Todo App</h3>
        <p>Task management app using JavaScript.</p>
      </div>

      <div className="project-card">
        <h3>Weather App</h3>
        <p>Weather checking app using API.</p>
      </div>
    </section>
  );
}

export default Projects;