import React from "react";

// libraries
import { Row, Col, Image } from "react-bootstrap";

// custom components
import Section from "./Section";

export default function Room({ floorIdx, roomIdx, roomData }) {
   return (
      <>
         <h4>{roomData.roomName}</h4>
         <Row>
            <Col xs={7} lg={8}>
               {roomData.sections &&
                  roomData.sections.map((sectionData, sectionIdx) => {
                     // console.log("room.jsx -- sectionData = ", sectionData)
                     return (
                        <div key={sectionData.id}>
                           <Section floorIdx={floorIdx} roomIdx={roomIdx} sectionIdx={sectionIdx} sectionData={sectionData} />
                        </div>
                     );
                  })}
            </Col>
            <Col xs={5} lg={4}>
               <a href={roomData.blueprintPic} target="_blank" rel="noreferrer" style={{ cursor: "zoom-in" }} >
                  <Image src={roomData.blueprintPic} fluid />
               </a>
            </Col>
         </Row>
      </>
   );
}
