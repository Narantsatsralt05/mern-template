import express from "express";
import cors from "cors";
import { movieRouter } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

// CORS Policy configuration
app.use(cors());

// Use Express
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routers
app.use(movieRouter);

app.get("/", (req, res) => {
  res.send("SERVICE RUNNING");
});

export default app;
//
