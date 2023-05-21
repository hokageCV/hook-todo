import { Box } from "@chakra-ui/react";
import TodoCard from "./TodoCard";
import { useTodoContextProvider } from "../../context/todo.context";

function DisplayTodos() {
  const { todoList } = useTodoContextProvider();
  // const taskList = [
  //   {
  //     taskID: 1,
  //     task: "eat lots of healthy food and then wash utensils",
  //   },
  //   {
  //     taskID: 2,
  //     task: "sleep",
  //   },
  //   {
  //     taskID: 3,
  //     task: "code",
  //   },
  // ];

  return (
    <Box mt={5}>
      {todoList.map((task) => (
        <TodoCard key={task._id} task={task.task} _id={task._id} />
      ))}
    </Box>
  );
}

export default DisplayTodos;
