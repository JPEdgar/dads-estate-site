import React from "react";

// libraries
import { Image, Row, Col, Button } from "react-bootstrap";

export default function Section({ sectionData }) {
   // console.log("(section.jsx) sectionData = ", sectionData);

   const addInterest = () => {
      console.log("add interest");
   };

   return (
      <>
         <Row>
            <Col>
               <Image
                  src={sectionData.pic}
                  style={{ height: "200px", width: "auto" }}
                  thumbnail
               />
            </Col>
            <Col>
               {/* <Row> */}
               {sectionData.interests &&
                  sectionData.interests.map((interestData) => {
                     console.log("(section.jsx) interestData =", interestData);
                     return (
                        <div>
                           <></>
                        </div>
                     );
                  })}
               <Button onClick={() => addInterest()}>+ Add Interest</Button>
               {/* </Row> */}
            </Col>
         </Row>
      </>
   );
}

/*

import React, { useState } from "react";

// libraries
import { Image, Row, Col, Button, Modal } from "react-bootstrap";

// custom components
import Interest from "./Interest";
import { RoomInterests } from "./HouseInfo";

export default function Section({ room, pic, interests, setInterests }) {
   const [showModal, setShowModal] = useState(false);

   const addInterest = () => {
      console.log("Interests = ", interests.rooms);
   };

   const handleClose = () => setShowModal(false);
   const handleShow = () => setShowModal(true);

   const instanceArr = [];

   // console.log("interests = ", interests);

   return (
      <>

         <hr />
      </>
   );
}

         {showModal && (
            <Modal show={showModal} onHide={handleClose} centered>
               <Modal.Header>
                  
                  {/ * <Modal.Title>{room.name}</Modal.Title> * /}
                  </Modal.Header>
                  <Modal.Body>
                     {/ * {instanceArr.map((data) => {
                        return (
                           <Interest
                              key={data.id}
                              data={data}
                              setInterests={setInterests}
                           />
                        );
                     })} * /}
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="primary" onClick={handleClose}>
                        Close/Done
                     </Button>
                  </Modal.Footer>
               </Modal>
            )}
   
            <Row>
               <Col xs={5} md={4}>
                  <Image
                     onClick={handleShow}
                     // src={pic.sectionPicture}
                     alt="pic"
                     thumbnail
                     style={{ cursor: "zoom-in", height: "150px", width: "auto" }}
                  />
               </Col>
               <Col xs={7} md={8}>
                  {/ * {interests.map((data) => {
                     return (
                        <Interest
                           key={data.id}
                           data={data}
                           setInterests={setInterests}
                        />
                     );
                  })} * /}
   
                  <Button onClick={() => addInterest()}>Add Interest</Button>
               </Col>
            </Row>
            <hr />
   
*/
