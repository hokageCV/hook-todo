import { Box } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

function DisplayTasks() {
  const taskList = [
    {
      taskID: 1,
      task: "eat lots of healthy food and then wash utensils",
    },
    {
      taskID: 2,
      task: "sleep",
    },
    {
      taskID: 3,
      task: "code",
    },
  ];

  return (
    <Box mt={5}>
      {taskList.map((task) => (
        <TaskCard key={task.taskID} task={task.task} taskID={task.taskID} />
      ))}
    </Box>
  );
}

export default DisplayTasks;
