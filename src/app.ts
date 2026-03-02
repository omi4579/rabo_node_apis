import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes";

const app = express(); 
app.use(cors({
  origin: "http://localhost:3000", // तुमचा frontend port
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "x-admin-key"]
}));
app.use(express.json());

// Register routes 
app.use("/api/tasks", taskRoutes);

export default app;
