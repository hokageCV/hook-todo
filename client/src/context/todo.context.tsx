import React, { createContext, useContext } from "react";
import useTodos from "../hooks/useTodos";
import type { Todo } from "../types";

// ==================================

type TodoContext = {
  todoList: Todo[];
  fetchTodos: () => void;
  addTodo: (task: string) => void;
  updateTodoItem: (_id: string, task: string) => void;
  deleteTodoItem: (_id: string) => void;
};

type TodoProviderProps = {
  children: React.ReactNode;
};
// ==================================

const TodoContext = createContext<TodoContext>({} as TodoContext);

export const TodoContextProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const { todoList, fetchTodos, addTodo, updateTodoItem, deleteTodoItem } = useTodos();

  return (
    <TodoContext.Provider value={{ todoList, fetchTodos, addTodo, updateTodoItem, deleteTodoItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContextProvider = () => {
  return useContext(TodoContext);
};
