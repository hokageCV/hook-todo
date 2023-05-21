import { Center, Container } from "@chakra-ui/react";
import InputTask from "../layouts/InputTask";
import DisplayTasks from "../layouts/DisplayTasks";

function Home() {
  return (
    <Container>
      <Center flexDirection="column">
        <h1>Home</h1>
        <InputTask />
        <DisplayTasks />
      </Center>
    </Container>
  );
}

export default Home;
