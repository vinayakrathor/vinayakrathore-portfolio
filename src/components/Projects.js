import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="glass-card project-card">
        <h3>Travel Booking Website UI</h3>
        <p>
          Developed a responsive travel booking website using HTML, CSS,
          JavaScript, PHP, and MySQL. Implemented server-side logic,
          handled booking data, and managed database integration.
        </p>
      </div>

      {/* Project 2 */}
      <div className="glass-card project-card">
        <h3>Top 5000 YouTube Channels Data Analysis</h3>
        <p>
          Analyzed a Kaggle dataset using Pandas and NumPy to uncover trends
          in subscriber growth and content categories. Created visualizations
          using Seaborn to represent engagement metrics and performance insights.
        </p>
      </div>

      {/* Project 3 */}
      <div className="glass-card project-card">
        <h3>Red Wine Quality Prediction (Machine Learning)</h3>
        <p>
          Built a machine learning classification model to predict wine quality
          using chemical properties dataset. Performed data preprocessing,
          visualization, and implemented classification algorithms for accurate predictions.
        </p>
      </div>

    </section>
  );
}

export default Projects;