import { Router } from "express";
import { getAllTodo, createTodo, updateTodo, deleteTodo } from "./modules/tasks/todo.controllers";

const todoRouter = Router();

todoRouter.get("/", getAllTodo);
todoRouter.post("/", createTodo);
todoRouter.patch("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

export default todoRouter;
