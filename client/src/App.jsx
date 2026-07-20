import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    alert(data.message || data.error);

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div>

      <nav className="navbar">
        <h2>Portfolio of Jannatul Ferdous Jerin</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="container">

        <section className="hero">

          <h1>Hello, I am Jannatul Jerin</h1>

          <p>
            Computer Science Student | Aspiring Data Scientist | Full-Stack Web
            Developer
          </p>

          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View My GitHub
          </a>

        </section>

        <section id="about">

          <h2>About Me</h2>

          <p>
            I am a Computer Science and Engineering student passionate about
            Data Science, Machine Learning, Artificial Intelligence and
            Full-Stack Web Development. I enjoy building useful software,
            learning modern technologies and solving real-world problems through
            programming.
          </p>

        </section>

        <section id="skills">

          <h2>Skills</h2>

          <ul className="skills-list">
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Machine Learning</li>
            <li>Git & GitHub</li>
          </ul>

        </section>

        <section id="projects">

          <h2>Projects</h2>

          <div className="projects-grid">

            {projects.map((project) => (

              <div className="project-card" key={project.id}>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <p>
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                {" | "}

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            ))}

          </div>

        </section>

        <section id="contact">

          <h2>Contact Me</h2>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">Send Message</button>

          </form>

        </section>

      </div>

      <footer className="footer">

        © 2026 Jannatul Ferdous Jerin. All Rights Reserved.

      </footer>

    </div>
  );
}

export default App;