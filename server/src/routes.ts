import { Router } from "express";
import { getAllTodo, createTodo, updateTodo, deleteTodo } from "./modules/tasks/todo.controllers";
import { Validate } from "./middleware/validate";
import { CreateTodoSchema, UpdateTodoSchema, DeleteTodoSchema } from "./modules/tasks/todo.schema";

const todoRouter = Router();

todoRouter.get("/", getAllTodo);
todoRouter.post("/", Validate(CreateTodoSchema), createTodo);
todoRouter.patch("/:taskId", Validate(UpdateTodoSchema), updateTodo);
todoRouter.delete("/:taskId", Validate(DeleteTodoSchema), deleteTodo);

export default todoRouter;
