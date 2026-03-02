import { Router } from "express";
import { addTask, getTasks, deleteTask } from "../controllers/task.controller";
import { deletemiddleware } from "../middlewares/task.middleware";

const router = Router();

router.post("/", addTask);
router.get("/", getTasks);
router.delete("/:id", deletemiddleware, deleteTask);

export default router;
