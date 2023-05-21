import { useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import useTodos from "./hooks/useTodos";

function App() {
  const { fetchTodos } = useTodos();

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
