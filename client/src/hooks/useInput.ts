import { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const resetInput = () => setInput("");

  return {
    input,
    setInput,
    handleInputChange,
    resetInput,
  };
};

export default useInput;
