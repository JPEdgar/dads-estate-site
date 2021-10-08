import React, { useState, useContext } from "react";

// libraries
import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";

// custom component
import SubmitModal from "./SubmitModal";
import HelpModal from "./HelpModal";

// constants
import { houseData } from "../constants/RoomsConstants";

// contexts
import { UserContext } from "../context/UserContext";

export default function NavBar() {
   const { user } = useContext(UserContext);
   const [preSub, setPreSub] = useState(false);
   const [showHelp, setShowHelp] = useState(false);

   return (
      <>
         {preSub && <SubmitModal preSub={preSub} setPreSub={setPreSub} />}
         {showHelp && (
            <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} />
         )}
         <Navbar bg="light" expand="md" sticky="top">
            <Container>
               <Navbar.Brand href="#home">
                  {user.firstName} {user.lastName}
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     {houseData.map((floor) => {
                        return (
                           <NavDropdown
                              key={floor.name}
                              title={floor.name}
                              id={floor.name}
                           >
                              {floor.floorData.map((data) => {
                                 return (
                                    <NavDropdown.Item
                                       key={data.name}
                                       href={`#${data.roomId}`}
                                    >
                                       {data.name}
                                    </NavDropdown.Item>
                                 );
                              })}
                           </NavDropdown>
                        );
                     })}
                  </Nav>
               </Navbar.Collapse>
               <Button
                  className="mx-2"
                  variant="info"
                  onClick={() => setShowHelp(true)}
               >
                  Help
               </Button>
               <Button variant="success" onClick={() => setPreSub((curr) => !curr)}>
                  Submit Interests
               </Button>
            </Container>
         </Navbar>
      </>
   );
}
