import React, { createContext, useContext } from "react";
import useInput from "../hooks/useInput";

// ==================================

type InputContext = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetInput: () => void;
};

type InputProviderProps = {
  children: React.ReactNode;
};
// ==================================

const InputContext = createContext<InputContext>({} as InputContext);

export const InputContextProvider: React.FC<InputProviderProps> = ({ children }) => {
  const { input, setInput, handleInputChange, resetInput } = useInput();

  return (
    <InputContext.Provider value={{ input, setInput, handleInputChange, resetInput }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContextProvider = () => {
  return useContext(InputContext);
};
