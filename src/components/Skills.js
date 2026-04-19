import React from "react";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        {/* Programming */}
        <div className="glass-card">
          <h3>Programming</h3>
          <p>Python, JavaScript</p>
        </div>

        {/* Web Development */}
        <div className="glass-card">
          <h3>Web Development</h3>
          <p>HTML, CSS, React (Basic)</p>
        </div>

        {/* Database */}
        <div className="glass-card">
          <h3>Database</h3>
          <p>MySQL</p>
        </div>

        {/* Data & ML */}
        <div className="glass-card">
          <h3>Data & Machine Learning</h3>
          <p>Pandas, NumPy, Seaborn, Scikit-learn</p>
        </div>

        {/* Tools */}
        <div className="glass-card">
          <h3>Tools</h3>
          <p>Git, VS Code</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;