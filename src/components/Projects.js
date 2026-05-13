import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
        {/* Project 1 */}
      <div className="glass-card project-card">
        <h3>IGF Golf Federation – AI-chatbot</h3>

        <p>
          Developed an AI-powered template engine to efficiently handle repeated 
          user queries using keyword and tag-based matching mechanisms.
        </p>

        <p>
          Integrated OpenAI API for dynamic response generation when no template 
          match was found, and implemented Pinecone vector database for semantic 
          similarity search to enhance query matching accuracy and response relevance.
        </p>

        <p>
          <strong>Tech Stack:</strong> Python, OpenAI API, Pinecone, Semantic Search
        </p>
      </div>


        {/* Project 2 */}
      <div className="glass-card project-card">
        <h3>PR Automation System</h3>

        <p>
          Designed and developed a Pull Request automation system to streamline 
          code review and merge workflows within team-based development environments.
        </p>

        <p>
          Implemented automated validation checks for code quality and structure, 
          along with rule-based auto-merge functionality to reduce manual review 
          overhead and improve development efficiency.
        </p>

        <p>
          <strong>Tech Stack:</strong> Python, Git, Automation Workflows
        </p>
      </div>
    <div className="glass-card project-card">
        <h3>EMS – Employee Management System</h3>

        <p>
          Contributed to the development of an employee dashboard and task 
          management modules with API integration and efficient database handling.
        </p>

        <p>
          Integrated Supabase for backend services including authentication and 
          real-time data management, enhancing workflow tracking and system performance.
        </p>

        <p>
          <strong>Tech Stack:</strong> React, Supabase, API Integration, Database Management
        </p>
      </div>


      {/* Project 4 */}
      <div className="glass-card project-card">
        <h3>Clothing E-Commerce Backend System</h3>

        <p>
          Built a scalable backend system using Python and FastAPI for managing 
          products, user operations, and order processing.
        </p>

        <p>
          Implemented RESTful APIs with proper routing, validation, and exception 
          handling to ensure secure and reliable application performance.
        </p>

        <p>
          <strong>Tech Stack:</strong> Python, FastAPI, REST API, Database Connectivity
        </p>
      </div>
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