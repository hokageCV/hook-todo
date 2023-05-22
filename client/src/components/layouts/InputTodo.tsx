import { useState } from "react";
import { Box, IconButton, Center, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTodoContextProvider } from "../../context/todo.context";

function InputTodo() {
  const { addTodo } = useTodoContextProvider();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const handleSubmit = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <Box mt="10px">
      <Center gap={1}>
        <Input placeholder="Add todo" color="cardText" value={inputValue} onChange={handleChange} />
        <IconButton aria-label="Add todo" icon={<AddIcon />} onClick={handleSubmit} />
      </Center>
    </Box>
  );
}

export default InputTodo;
