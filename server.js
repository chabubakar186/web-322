/********************************************************************************
* WEB322 – Assignment 03
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.ht
********************************************************************************/
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");

const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// SESSION
app.use(session({
    secret: "sid_super_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000, // 30 min
    }
}));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MONGODB ONLY
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✔ MongoDB connected"))
    .catch(err => console.log("❌ MongoDB error:", err.message));

// ROUTES
app.use("/", authRoutes);
app.use("/", taskRoutes);

// DEFAULT (root redirect)
app.get("/", (req, res) => {
    res.redirect("/login");
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
