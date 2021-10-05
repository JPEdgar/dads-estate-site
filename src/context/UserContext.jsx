import { createContext } from "react";

export const InitiateUserDefault = () => {
   return { firstName: "", lastName: "", email: "", phone: null };
   // return { firstName: "first", lastName: "last", email: "email@email.com", phone: null, };
};

export const UserContext = createContext(InitiateUserDefault());
