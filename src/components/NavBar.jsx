import React from "react";

// libraries
import { Nav, Navbar, Row, Col, Button } from "react-bootstrap";

// constants
import { firstFloor, secondFloor } from "../constants/RoomsConstants";

export default function NavBar({ user, setUser, setShow, resetUser }) {
   const handleLogout = () => {
      setUser(resetUser);
      setShow(true);
   };

   const firstFloorArray = [];
   const secondFloorArray = [];

   // for (const [key, value] of Object.entries(firstFloor)) {
   //    firstFloorArray.push(value);
   // }
   // for (const [key, value] of Object.entries(secondFloor)) {
   //    secondFloorArray.push(value);
   // }

   return (
      <>
         <Navbar bg="light" sticky="top" className="d-block">
            <Row>
               <div className="d-flex justify-content-between">
                  <h3>
                     {user.firstName} {user.lastName}
                  </h3>
                  <Button size="sm" onClick={() => handleLogout()}>
                     Log out
                  </Button>
               </div>
            </Row>
            <Row>
               <Col>
                  <Nav>
                     <>
                        {/* {secondFloorArray.map((data) => {
                           return (
                              <Col xs={2}>
                                 <Nav.Link>{data}</Nav.Link>
                              </Col>
                           );
                        })} */}
                     </>
                  </Nav>
               </Col>
               ...
               <Col>
                  <Nav>
                     <>
                        {/* {firstFloorArray.map((data, index) => {
                           return (
                              <Col xs={2}>
                                 <Nav.Link>{data}</Nav.Link>
                              </Col>
                           );
                        })} */}
                     </>
                  </Nav>
               </Col>
            </Row>
         </Navbar>
      </>
   );
}
