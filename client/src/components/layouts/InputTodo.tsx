import { Box, IconButton, Center, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function InputTodo() {
  return (
    <Box mt="10px">
      <Center gap={1}>
        <Input placeholder="Add todo" color="cardText" />
        <IconButton aria-label="Add todo" icon={<AddIcon />} />
      </Center>
    </Box>
  );
}

export default InputTodo;
