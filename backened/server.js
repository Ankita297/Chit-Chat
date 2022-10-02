const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("APP is running");
});

app.get("/api/chat", (req, res) => {
  res.send("chats");
});

app.get("/api/chat/:id", (req, res) => {
  res.send("filter chat ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
