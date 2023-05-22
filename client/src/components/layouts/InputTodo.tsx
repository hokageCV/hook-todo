import { Box, IconButton, Center, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTodoContextProvider } from "../../context/todo.context";
import { useInputContextProvider } from "../../context/input.context";

function InputTodo() {
  const { addTodo } = useTodoContextProvider();
  const { input, handleInputChange, resetInput } = useInputContextProvider();

  const handleSubmit = () => {
    addTodo(input);
    resetInput();
  };

  return (
    <Box mt="10px">
      <Center gap={1}>
        <Input placeholder="Add todo" color="cardText" value={input} onChange={handleInputChange} />
        <IconButton aria-label="Add todo" icon={<AddIcon />} onClick={handleSubmit} />
      </Center>
    </Box>
  );
}

export default InputTodo;
