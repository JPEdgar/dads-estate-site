import React, { useState, useEffect } from "react";

// libraries
import { Modal, Button, Image, Col, Row } from "react-bootstrap";

// custom components
import Interest from "./Interest";

export default function InterestModal({
   modInfo,
   show,
   setShow,
   interests,
   setInterests,
}) {
   const [currSec, setCurrSec] = useState(
      interests[modInfo.floorInfo]?.rooms[modInfo.roomInfo]?.sections[
         modInfo?.sectionInfo
      ]
   );

   useEffect(() => {
      //   console.log(modInfo);
      //   console.log(interests[modInfo.floorInfo].rooms[modInfo.roomInfo])
      // console.log("currSec = ", currSec);
   }, [currSec]);

   const addInterest = () => {
      // setCurrSec((curr) => { const temp = [...curr]; temp.push(InterestInfo()); return temp; });
   };
   const deleteInterest = (id) => {
      // setCurrSec((curr) => curr.filter((currInt) => currInt.id !== id));
   };

   return (
      <div>
         <Modal centered show={show}>
            <Modal.Header>
               <Modal.Title>
                  <h2>header</h2>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Row
                  style={
                     {
                        // height: "500px"
                        // width: "90%"
                     }
                  }
               >
                  <Col xs={4}>
                     <Image src={currSec.pic} alt="" fluid />
                  </Col>
                  <Col xs={8}>
                     {
                        // sectionData.intersts.length > 0 &&
                        // sectionData.interests.map((interestData) => {
                        currSec.interests.map((interestData) => {
                           // console.log("(section.jsx) interestData = ", interestData);
                           console.log(interestData);
                           return (
                              <div key={interestData.id}>
                                 <Interest
                                    floorIdx={modInfo.floor}
                                    roomIdx={modInfo.room}
                                    sectionIdx={modInfo.section}
                                    interestData={interestData}
                                    interests={interests}
                                    setInterests={setInterests}
                                    deleteInterest={deleteInterest}
                                 />
                              </div>
                           );
                        })
                     }
                     <Button>click</Button>
                  </Col>
               </Row>
               {/* <Row>
                  <h3>{modInfo.floorInfo}</h3>
                  <h3>{modInfo.roomInfo}</h3>
                  <h3>{modInfo.sectionInfo}</h3>
               </Row> */}
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setShow(false)}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}
