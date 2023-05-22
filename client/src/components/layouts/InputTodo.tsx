import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Center,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTodoContextProvider } from "../../context/todo.context";
import { useInputContextProvider } from "../../context/input.context";

const TimeBeforePopoverCloses = 2000;

function InputTodo() {
  const { addTodo } = useTodoContextProvider();
  const { input, handleInputChange, resetInput } = useInputContextProvider();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const isInputEmpty = input.trim() === "";

  const handleSubmit = () => {
    if (isInputEmpty) {
      setIsPopoverOpen(true);
      setTimeout(() => {
        setIsPopoverOpen(false);
      }, TimeBeforePopoverCloses);
    } else {
      addTodo(input);
      resetInput();
    }
  };

  useEffect(() => {
    if (isPopoverOpen) {
      const timeoutId = setTimeout(() => {
        setIsPopoverOpen(false);
      }, TimeBeforePopoverCloses);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isPopoverOpen]);

  return (
    <Box mt="20px">
      <Center gap={1}>
        <Input placeholder="Add todo" color="cardText" value={input} onChange={handleInputChange} />

        <Popover isOpen={isPopoverOpen} placement="bottom-start">
          <PopoverTrigger>
            <IconButton aria-label="Add todo" icon={<AddIcon />} onClick={handleSubmit} />
          </PopoverTrigger>
          <PopoverContent bg="baseBG2" color="cardText" borderColor="baseBG3">
            <PopoverArrow />
            <PopoverHeader fontSize="md" pb={0}>
              Empty Todo
            </PopoverHeader>
            <PopoverBody fontSize="sm" pt={0}>
              Please enter a todo before submitting.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Center>
    </Box>
  );
}

export default InputTodo;
