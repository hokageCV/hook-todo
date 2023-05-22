import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ultraTheme from "./style/theme.ts";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { TodoContextProvider } from "./context/todo.context.tsx";
import { InputContextProvider } from "./context/input.context.tsx";

const theme = extendTheme(ultraTheme);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InputContextProvider>
      <TodoContextProvider>
        <ChakraProvider theme={theme}>
          <Box bg="baseBG.1" minH="100vh">
            <App />
          </Box>
        </ChakraProvider>
      </TodoContextProvider>
    </InputContextProvider>
  </React.StrictMode>
);
