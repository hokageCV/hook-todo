import { Flex, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

export function Navbar() {
  return (
    <Flex align="center" justify="center" wrap="wrap" bg="navBG" px={4} py={1} height={14}>
      <img src={logo} alt="logo" height="40px" width="40px" />
      <Text fontSize="3xl" color="navText" ml={2}>
        Todo
      </Text>
    </Flex>
  );
}
