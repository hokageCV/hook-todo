import { Box } from "@chakra-ui/react";
import TodoCard from "./TodoCard";
import { useTodoContextProvider } from "../../context/todo.context";

function DisplayTodos() {
  const { todoList } = useTodoContextProvider();

  return (
    <Box mt={5}>
      {todoList.map((task) => (
        <TodoCard key={task._id} task={task.task} _id={task._id} />
      ))}
    </Box>
  );
}

export default DisplayTodos;
