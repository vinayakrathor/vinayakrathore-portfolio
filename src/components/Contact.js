import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="contact-links">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="mailto:yourmail@gmail.com">
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;