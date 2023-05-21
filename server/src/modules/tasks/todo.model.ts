import { Schema, model } from "mongoose";

type TodoType = {
  task: string;
};

const todoSchema = new Schema<TodoType>({
  task: String,
});

const TodoModel = model<TodoType>("Todo", todoSchema);

export default TodoModel;
