import { createContext } from "react";

export const InitializeTermsDefault = () => {
   return false;
};

export const TermsContext = createContext(InitializeTermsDefault());
