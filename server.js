/********************************************************************************
*  WEB322 – Assignment 02
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
*  Name: Muhammad Abubakar      Student ID: 122043243    Date: 2025-11-09
********************************************************************************/

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001; // Vercel uses process.env.PORT

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, etc.)
app.use(express.static("public"));

// Mock project data
const projects = [
  { id: 1, title: "Website Redesign", description: "We built a modern responsive website for our client.", image: "/images/project1.jpg" },
  { id: 2, title: "Mobile App", description: "Developed a cross-platform mobile app using React Native.", image: "/images/project2.jpg" },
  { id: 3, title: "E-Commerce Platform", description: "Created a scalable e-commerce solution with secure payments.", image: "/images/project3.jpg" }
];

// Routes
app.get("/", (req, res) => res.render("home", { page: "/" }));

app.get("/about", (req, res) => res.render("about", { page: "/about" }));

app.get("/solutions/projects", (req, res) => {
  res.render("projects", { projects, page: "/solutions/projects" });
});

app.get("/solutions/projects/:id", (req, res) => {
  const project = projects.find(p => p.id == req.params.id);
  if (project) {
    res.render("project", { project, page: "/solutions/projects" });
  } else {
    res.status(404).render("404", { page: "" });
  }
});

// 404 route
app.use((req, res) => res.status(404).render("404", { page: "" }));

// ✅ Export app for Vercel
module.exports = app;

// ✅ Local development (only runs locally, ignored by Vercel)
if (require.main === module) {
  app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
}
