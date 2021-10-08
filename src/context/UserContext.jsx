import { createContext } from "react";

export const InitiateUserDefault = () => {
   return { firstName: "", lastName: "", email: "", phone: "" };
   // return { firstName: "myFirstName", lastName: "myLastName", email: "me@email.com", phone: "18005551212", };
};

export const UserContext = createContext(InitiateUserDefault());
