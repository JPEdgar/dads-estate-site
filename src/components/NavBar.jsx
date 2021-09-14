import React from "react";

// libraries
import {
   Nav,
   Navbar,
   NavDropdown,
   Container,
   Row,
   Col,
   Button,
} from "react-bootstrap";

// constants
import { houseData } from "../constants/RoomsConstants";

export default function NavBar({ user, setUser, setShow, resetUser }) {
   const handleLogout = () => {
      setUser(resetUser);
      setShow(true);
   };

   return (
      <>
         <Navbar bg="light" expand="lg" sticky="top">
            <Container>
               <Navbar.Brand href="#1Kitchen">React-Bootstrap</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     {houseData.map((floor, index) => {
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
            </Container>
         </Navbar>
      </>
   );
}

/* <Navbar bg="light" sticky="top" className="d-block"> */

/* <Row>
               <div className="d-flex justify-content-between">
                  <h3>
                     {user.firstName} {user.lastName}
                  </h3>
                  <Button size="sm" onClick={() => handleLogout()}>
                     Log out
                  </Button>
               </div>
            </Row> */

/* <Row>
               <Nav>
                  {houseData.map((floor, index) => {
                     return (
                        // <div key={index + floor.name}>
                        <>
                           {index < 1 &&
                              floor.floorData.map((data, index2) => {
                                 return index2 > 5 ? (
                                    <Nav.Link>{data.name}</Nav.Link>
                                 ) : (
                                    <Nav.Link>{data.name}</Nav.Link>
                                 );
                              })}
                              </>
                        // </div>
                     );
                  })}
               </Nav>
            </Row> */

/* </Navbar> */
