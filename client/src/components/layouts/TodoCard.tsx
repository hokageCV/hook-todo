import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import type { Todo } from "../../types";
import { useTodoContextProvider } from "../../context/todo.context";

function TodoCard({ task, _id }: Todo) {
  const { deleteTodoItem } = useTodoContextProvider();

  const handleDelete = () => {
    deleteTodoItem(_id);
  };

  return (
    <Box bg="cardBG" borderRadius={10} m={1} px={3} py={1} minW="300px" maxW="100%">
      <Flex justify="space-between" alignItems="center">
        <Text color="cardText">{task}</Text>
        <Box>
          <IconButton
            aria-label="Edit task"
            icon={<EditIcon />}
            colorScheme="blue"
            variant="ghost"
            size="md"
          />
          <IconButton
            aria-label="Delete task"
            icon={<DeleteIcon />}
            colorScheme="red"
            variant="ghost"
            size="md"
            onClick={handleDelete}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default TodoCard;
