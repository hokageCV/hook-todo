import { useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import { useTodoContextProvider } from "./context/todo.context";

function App() {
  const { fetchTodos } = useTodoContextProvider();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
