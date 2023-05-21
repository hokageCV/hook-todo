import { SERVER_URL } from "../constants";

export const getAllTodos = async () => {
  const response = await fetch(`${SERVER_URL}/todo`);
  const data = await response.json();

  return data;
};

export const createTodo = async (task: string) => {
  const response = await fetch(`${SERVER_URL}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  const data = await response.json();

  return data;
};

export const updateTodo = async (taskId: string, task: string) => {
  const response = await fetch(`${SERVER_URL}/todo/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  const data = await response.json();

  return data;
};

export const deleteTodo = async (taskId: string) => {
  const response = await fetch(`${SERVER_URL}/todo/${taskId}`, {
    method: "DELETE",
  });
  const data = await response.json();

  return data;
};
