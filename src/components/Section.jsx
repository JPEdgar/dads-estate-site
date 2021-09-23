import React, { useState, useEffect } from "react";

// libraries
import { Image, Row, Col, Button } from "react-bootstrap";

// custom components
import Interest from "./Interest";
import { InterestInfo } from "./HouseInfo";

export default function Section({
   floorIdx,
   roomIdx,
   sectionIdx,
   sectionData,
   setInterests,
}) {
   // console.log("(section.jsx) sectionData = ", sectionData);
   const [updateState, setUpdateState] = useState(false);

   useEffect(() => {
      setUpdateState(false);
      if (updateState) {
         setInterests((curr) => {
            const tempCurr = [...curr];
            const loc =
               tempCurr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests;

            // intake -- picId = "", room = "", fName = "", lName = "", email = "", phone = "", desc = ""
            // return -- id: Math.random() * 1000, room: room, pictureId: picId, firstName: fName, lastName: lName, email: email, phone: phone, description: desc,
            loc.push(InterestInfo());
            return curr;
         });
      }
   }, [updateState]);

   const addInterest = () => {
      setUpdateState(true);
   };

   return (
      <>
         <Row className="mt-1">
            <Col>
               <Image src={sectionData.pic} style={{ height: "200px", width: "auto" }} thumbnail />
            </Col>
            <Col>
               {sectionData.interests.map((interestData) => {
                  // console.log("(section.jsx) interestData = ", interestData);
                  return (
                     <div key={interestData.id}>
                        <Interest 
                           floorIdx={floorIdx} 
                           roomIdx={roomIdx} 
                           sectionIdx={sectionIdx} 
                           interestData={interestData} 
                           setInterests={setInterests} 
                        />
                     </div>
                  );
               })}
               <Button onClick={() => addInterest()}>+ Add Interest</Button>
            </Col>
         </Row>
         <hr />
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
