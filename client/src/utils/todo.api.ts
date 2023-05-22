import { SERVER_URL } from "../constants";

export const getAllTodosFromDB = async () => {
  const response = await fetch(`${SERVER_URL}/todo`);
  const responseData = await response.json();

  const todo = responseData.data.todo;

  return todo;
};

export const createTodoInDB = async (task: string) => {
  const response = await fetch(`${SERVER_URL}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  const responseData = await response.json();

  const todo = responseData.data.todo;

  return todo;
};

export const updateTodoInDB = async (taskId: string, task: string) => {
  const response = await fetch(`${SERVER_URL}/todo/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  const responseData = await response.json();

  const todo = responseData.data.todo;

  return todo;
};

export const deleteTodoInDB = async (taskId: string) => {
  const response = await fetch(`${SERVER_URL}/todo/${taskId}`, {
    method: "DELETE",
  });
  const responseData = await response.json();

  const todo = responseData.data.todo;

  return todo;
};
