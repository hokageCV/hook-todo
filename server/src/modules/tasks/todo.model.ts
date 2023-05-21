import { Schema, model } from "mongoose";

type TodoType = {
  title: string;
};

const todoSchema = new Schema<TodoType>({
  title: String,
});

const TodoModel = model<TodoType>("Todo", todoSchema);

export default TodoModel;
