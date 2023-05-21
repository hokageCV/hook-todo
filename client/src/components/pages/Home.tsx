import { Center, Container } from "@chakra-ui/react";
import InputTask from "../layouts/InputTask";

function Home() {
  return (
    <Container>
      <Center flexDirection="column">
        <h1>Home</h1>
        <InputTask />
      </Center>
    </Container>
  );
}

export default Home;
