import React, { createContext } from "react";
import useTodos from "../hooks/useTodos";

// ==================================
type Todo = {
  _id: string;
  task: string;
};

type TodoContext = {
  todoList: Todo[];
  addTodo: (task: string) => void;
  updateTodoItem: (taskId: string, task: string) => void;
  deleteTodoItem: (taskId: string) => void;
};

type TodoProviderProps = {
  children: React.ReactNode;
};
// ==================================

const TodoContext = createContext<TodoContext>({} as TodoContext);

export const TodoContextProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const { todoList, addTodo, updateTodoItem, deleteTodoItem } = useTodos();

  return (
    <TodoContext.Provider value={{ todoList, addTodo, updateTodoItem, deleteTodoItem }}>
      {children}
    </TodoContext.Provider>
  );
};
