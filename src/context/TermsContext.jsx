import { createContext } from "react";

export const InitializeTermsDefault = () => {
   return false;
   // return true;
};

export const TermsContext = createContext(InitializeTermsDefault());
