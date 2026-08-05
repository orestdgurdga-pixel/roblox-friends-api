const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.get("/userid/:username", async (req, res) => {
    const response = await fetch("https://users.roblox.com/v1/usernames/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usernames: [req.params.username],
            excludeBannedUsers: false
        })
    });

    const data = await response.json();
    res.json(data);
});

app.get("/friends/:id", async (req, res) => {
    const response = await fetch(
        `https://friends.roblox.com/v1/users/${req.params.id}/friends`
    );

    const data = await response.json();
    res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Started");
});
