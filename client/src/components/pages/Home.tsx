import { Center, Container } from "@chakra-ui/react";
import InputTodo from "../layouts/InputTodo";
import DisplayTodos from "../layouts/DisplayTodos";

function Home() {
  return (
    <Container>
      <Center flexDirection="column">
        <InputTodo />
        <DisplayTodos />
      </Center>
    </Container>
  );
}

export default Home;
