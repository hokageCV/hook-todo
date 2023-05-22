import React, { createContext, useContext } from "react";
import useInput from "../hooks/useInput";

// ==================================

type InputContext = {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetInput: () => void;
};

type InputProviderProps = {
  children: React.ReactNode;
};
// ==================================

const InputContext = createContext<InputContext>({} as InputContext);

export const InputContextProvider: React.FC<InputProviderProps> = ({ children }) => {
  const { input, handleInputChange, resetInput } = useInput();

  return (
    <InputContext.Provider value={{ input, handleInputChange, resetInput }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContextProvider = () => {
  return useContext(InputContext);
};
