import React, { useState } from "react";

// libraries
import { Modal, ButtonGroup, Button, Form, Row, Col } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";

export default function Login({ user, setUser, show, setShow }) {
   const [tempUser, setTempUser] = useState(user);

   const storageName = "tempUserInfo";

   const handleLogin = () => {
      setShow(false);
      localStorage.setItem(`${storageName}`, JSON.stringify(tempUser));
      setUser(tempUser);
      clearData();
   };

   const loadUser = () => {
      const loadedData = localStorage.getItem(`${storageName}`);
      const convertedData = JSON.parse(loadedData);
      setTempUser(convertedData);
   };

   const deleteUser = () => {
      localStorage.removeItem(`${storageName}`);
   };

   const clearData = () => {
      setTempUser({ firstName: "", lastName: "", email: "", phone: null });
   };

   return (
      <>
         <Modal centered show={show} backdrop="static" keyboard={false}>
            <Modal.Header>
               <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Row>
                  <Form.Text className="text-muted">
                     Please enter your contact information.
                  </Form.Text>
                  <Form.Text className="text-muted mb-2">
                     Your information will not be shared with anyone.
                  </Form.Text>
               </Row>
               <Row>
                  <Col>
                     <Form.Label>First Name </Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        onChange={(e) =>
                           setTempUser({
                              ...tempUser,
                              firstName: e.target.value,
                           })
                        }
                        value={tempUser.firstName}
                     />
                  </Col>
                  <Col>
                     <Form.Label>Last Name </Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        onChange={(e) =>
                           setTempUser({
                              ...tempUser,
                              lastName: e.target.value,
                           })
                        }
                        value={tempUser.lastName}
                     />
                  </Col>
               </Row>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone number</Form.Label>
                  <PhoneInput
                     country={"us"}
                     onChange={(e) => setTempUser({ ...tempUser, phone: e })}
                     value={tempUser.phone}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                     type="email"
                     placeholder="Enter email"
                     onChange={(e) =>
                        setTempUser({ ...tempUser, email: e.target.value })
                     }
                     value={tempUser.email}
                  />
               </Form.Group>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
               {localStorage.getItem(`${storageName}`) && (
                  <ButtonGroup size="sm">
                     <Button variant="info" onClick={() => loadUser()}>
                        Load User
                     </Button>
                     <Button variant="danger" onClick={() => deleteUser()}>
                        Delete User
                     </Button>
                  </ButtonGroup>
               )}
               <Button variant="secondary" onClick={() => clearData()}>
                  Clear
               </Button>
               <Button variant="primary" onClick={() => handleLogin()}>
                  Log in
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
