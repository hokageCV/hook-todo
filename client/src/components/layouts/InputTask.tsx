import { Box, IconButton, Center, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function InputTask() {
  return (
    <Box mt="10px">
      <Center gap={1}>
        <Input placeholder="Add task" color="cardText" />
        <IconButton aria-label="Add task" icon={<AddIcon />} />
      </Center>
    </Box>
  );
}

export default InputTask;
