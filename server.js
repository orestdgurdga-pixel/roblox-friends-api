const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.get("/friends/:id", async (req, res) => {
    try {
        const response = await fetch(
            `https://friends.roblox.com/v1/users/${req.params.id}/friends`
        );

        const data = await response.json();

        res.json(data);
    } catch (e) {
        res.status(500).json({
            error: e.toString()
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Started");
});
