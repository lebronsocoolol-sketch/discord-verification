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
    const params = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
        response_type: "code",
        scope: "identify email"
    });

    res.redirect(`https://discord.com/oauth2/authorize?${params.toString()}`);
});

// Callback route (OAuth2 will be added next)
app.get("/callback", (req, res) => {
    res.send("Discord callback received!");
});

app.listen(PORT, () => {
    console.log(`PackGod Bot website running on port ${PORT}`);
});
