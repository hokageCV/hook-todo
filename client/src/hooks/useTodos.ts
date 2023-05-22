import { useState } from "react";
import {
  createTodoInDB,
  deleteTodoInDB,
  getAllTodosFromDB,
  updateTodoInDB,
} from "../utils/todo.api";
import type { Todo } from "../types";

const useTodos = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const todos = await getAllTodosFromDB();

      setTodoList(todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (task: string) => {
    try {
      const newTodo = await createTodoInDB(task);
      setTodoList([...todoList, newTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const updateTodoItem = async (taskId: string, task: string) => {
    try {
      await updateTodoInDB(taskId, task);
      const updatedTodoList: Todo[] = todoList.map((todo) =>
        todo._id === taskId ? { ...todo, task } : todo
      );
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodoItem = async (taskId: string) => {
    try {
      await deleteTodoInDB(taskId);
      const filteredTodoList = todoList.filter((todo) => todo._id !== taskId);
      setTodoList(filteredTodoList);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return {
    todoList,
    fetchTodos,
    addTodo,
    updateTodoItem,
    deleteTodoItem,
  };
};

export default useTodos;
