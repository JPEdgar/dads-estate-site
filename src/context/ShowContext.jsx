import { createContext } from "react";

export const InitializeShowDefault = () => {
   return true;
};

export const ShowContext = createContext(InitializeShowDefault());
