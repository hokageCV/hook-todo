import { useState } from "react";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../utils/todo.api";

type Todo = {
  _id: string;
  task: string;
};

const useTodos = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const data = await getAllTodos();
      setTodoList(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (task: string) => {
    try {
      const data: Todo = await createTodo(task);
      setTodoList([...todoList, data]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const updateTodoItem = async (taskId: string, task: string) => {
    try {
      await updateTodo(taskId, task);
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
      await deleteTodo(taskId);
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
