const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A responsive portfolio website built using React and Express.",
    tech: ["React", "Express", "CSS"],
    github: "https://github.com/jannatuljerin24/jerin-portfolio-workshop",
    demo: "https://your-vercel-url.vercel.app"
  }
];
app.get("/", (req, res) => {
 res.send("Portfolio API is running");
});

app.get("/projects", (req, res) => {
 res.json(projects);
});

app.post("/contact", (req, res) => {
 const { name, email, message } = req.body;

 if (!name || !email || !message) {
   return res.status(400).json({ error: "All fields are required" });
 }

 console.log("Contact form submitted:", { name, email, message });

 res.json({ message: "Message received successfully" });
});

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});
