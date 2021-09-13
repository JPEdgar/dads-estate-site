import React, { useState } from "react";

// libraries
import { Container } from "react-bootstrap";

// custom components
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import Rooms from "../components/Rooms";

const resetUser = () => {
   return { firstName: "", lastName: "", email: "", phone: null };
};

export default function Home() {
   const [user, setUser] = useState(resetUser);
   const [show, setShow] = useState(true);

   return (
      <>
         <Login user={user} setUser={setUser} setShow={setShow} show={show} />
         {user.firstName && user.lastName && user.email && user.phone && (
            <Container className=" mt-1">
               <NavBar user={user} setUser={setUser} setShow={setShow} resetUser={resetUser}/>
               <Rooms />
            </Container>
         )}
      </>
   );
}
