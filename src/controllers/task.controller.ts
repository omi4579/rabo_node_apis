import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid"; 
import { Task, tasks } from "../models/task.model";

export const addTask = (req: Request, res: Response): void => {
  const { title, description, status, priority } = req.body;

  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    status,
    priority
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task added successfully",
    data: newTask
  });
};

export const getTasks = (req: Request, res: Response): void => {
  const { title } = req.query;

  let filteredTasks = tasks;

  // Check if title query exists and is a string
  if (title && typeof title === "string") {
    const search = title.trim().toLowerCase();

    filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(search)
    );
  }

  res.status(200).json(filteredTasks);
};

export const deleteTask = (req: Request, res: Response): void => {
  const id = String(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  tasks.splice(index, 1);

  res.status(200).json({ message: "Task deleted" });
};
