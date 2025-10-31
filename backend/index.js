import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import weatherRouter from "./router/weatherRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Root route
app.get("/", (req, res) => {
  res.send("Weather API is running successfully!");
});

// weather router

app.use('/api/weather',weatherRouter)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
