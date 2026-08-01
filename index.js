const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "verify.html"));
});

// Login route (OAuth2 will be added next)
app.get("/login", (req, res) => {
    res.send("Discord OAuth2 will be added here.");
});

// Callback route (OAuth2 will be added next)
app.get("/callback", (req, res) => {
    res.send("Discord callback received!");
});

app.listen(PORT, () => {
    console.log(`PackGod Bot website running on port ${PORT}`);
});
