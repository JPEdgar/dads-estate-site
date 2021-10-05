import React, { useContext } from "react";

// libraries
import { Container } from "react-bootstrap";

// custom components
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import House from "../components/House";

// contexts
import { ShowContext } from "../context/ShowContext";
import { UserContext } from "../context/UserContext";

export default function Home() {
   const { show } = useContext(ShowContext);
   const { user } = useContext(UserContext);
   
   return (
      <>
         {show && <Login />}
         {user.firstName && user.lastName && user.email && (
            <Container className=" mt-1" id="home" fluid="md">
               <NavBar />
               <House />
            </Container>
         )}
      </>
   );
}
