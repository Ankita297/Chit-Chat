const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const colors = require("colors");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
connectDB();

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
