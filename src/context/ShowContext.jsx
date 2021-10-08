import { createContext } from "react";

export const InitializeShowDefault = () => {
   return true;
   // return false;
};

export const ShowContext = createContext(InitializeShowDefault());
