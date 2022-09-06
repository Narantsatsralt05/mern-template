import express from "express";
import cors from "cors";

const app = express();

// CORS Policy configuration
app.use(cors());

// Use Express
app.use(express.json());

// Routers

app.get("/", (req, res) => {
  res.send("SERVICE RUNNING");
});

export default app;
//
