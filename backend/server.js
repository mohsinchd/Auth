const express = require("express");
const app = express();
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
require("dotenv").config();

// Connect DB
connectDB();

// Body Parser
app.use(express.json());

// Routes

app.use("/api/users", require("./routes/userRoutes"));

// Error Handler Middlewares
app.use(notFound);
app.use(errorHandler);

// SERVER
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server is Running on PORT = ${PORT}`));
