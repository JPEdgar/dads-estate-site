import React, { useState, useEffect } from "react";

// libraries
import { Image, Row, Col, Button, Modal } from "react-bootstrap";

// custom components
import Interest from "./Interest";
import { InterestInfo } from "./HouseInfo";

export default function Section({
   floorIdx,
   roomIdx,
   sectionIdx,
   sectionData,
   interests,
   setInterests,
   setModType,
   setModInfo,
   setShow,
}) {
   // console.log("(section.jsx) sectionData = ", sectionData);
   const [currSec, setCurrSec] = useState(
      interests[floorIdx].rooms[roomIdx].sections[sectionIdx].interests
   );

   useEffect(() => {
      setInterests((curr) => {
         const temp = [...curr];
         temp[floorIdx].rooms[roomIdx].sections[sectionIdx].interests = currSec;
         return temp;
      });
   }, []);
   useEffect(() => {
      setInterests((curr) => {
         /* console.log(curr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests)*/
         curr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests = currSec;
         return curr;
      });
   }, [currSec]);

   // const loc = tempCurr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests;

   // InterestInfo() -- details
   // intake -- (picId = "", room = "", fName = "", lName = "", email = "", phone = "", desc = "")
   // return -- {id: Math.random() * 1000, room: room, pictureId: picId, firstName: fName, lastName: lName, email: email, phone: phone, description: desc}

   const addInterest = () => {
      setCurrSec((curr) => {
         const temp = [...curr];
         temp.push(InterestInfo());
         return temp;
      });
   };
   const deleteInterest = (id) => {
      setCurrSec((curr) => curr.filter((currInt) => currInt.id !== id));
   };
   const logInterests = () => {
      console.log(interests[floorIdx].rooms[roomIdx].sections);
   };

   const handleClose = () => {
      setShow(false);
      // setModType(null);
   };
   const handleOpen = () => {
      setShow(true);
      setModType("Interest");
      setModInfo((curr) => ({
         ...curr,
         floorInfo: floorIdx,
         roomInfo: roomIdx,
         sectionInfo: sectionIdx,
      }));
   };

   return (
      <>
         <Row className="mt-1">
            <Col>
               <Image
                  onClick={() => handleOpen()}
                  src={sectionData.pic}
                  style={{ height: "200px", width: "auto", cursor: "zoom-in" }}
                  thumbnail
               />
            </Col>
            <Col>
               {
                  // sectionData.intersts.length > 0 &&
                  // sectionData.interests.map((interestData) => {
                  currSec.map((interestData, interestIdx) => {
                     // console.log("(section.jsx) interestData = ", interestData);
                     return (
                        <div key={interestData.id}>
                           <Interest
                              floorIdx={floorIdx}
                              roomIdx={roomIdx}
                              sectionIdx={sectionIdx}
                              interestIdx={interestIdx}
                              interestData={interestData}
                              interests={interests}
                              setInterests={setInterests}
                              deleteInterest={deleteInterest}
                           />
                        </div>
                     );
                  })
               }
               <Button onClick={() => addInterest()}>+ Add Interest</Button>
               <Button onClick={() => logInterests()} className="mx-1">
                  {" "}
                  Log{" "}
               </Button>
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
