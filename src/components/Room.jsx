import React from "react";

// libraries
import { Row, Col, Image } from "react-bootstrap";

// custom components
import Section from "./Section";

export default function Room({ floorIdx, roomIdx, roomData, setInterests }) {
   // console.log("(room.jsx) roomData = ", roomData);

   return (
      <>
         <h4>{roomData.roomName}</h4>
         <Row>
            <Col xs={7} lg={8}>
               {roomData.sections &&
                  roomData.sections.map((sectionData, sectionIdx) => {
                     // console.log("(room.jsx) sectionData = ", sectionData)
                     return (
                        <div key={sectionData.id}>
                           <Section floorIdx={floorIdx} roomIdx={roomIdx} sectionIdx={sectionIdx} sectionData={sectionData} setInterests={setInterests} />
                        </div>
                     );
                  })}
            </Col>
            <Col xs={5} lg={4}>
               <Image src={roomData.blueprintPic} fluid />
            </Col>
         </Row>
      </>
   );
}

/*

import React, { useState, useEffect } from "react";

// libraries
import { Image, Row, Col } from "react-bootstrap";

// custom
import Section from "./Section";
import { RoomInterests } from "./HouseInfo";

export default function Room({ interests, setInterests }) {
   const handleZoom = () => {
      //
   };

   return (
      <>
         {interests &&
            interests.rooms.map((data) => {
               // console.log(data);
               return (
                  <>
                     <Row>
                        <h4>{data.roomName}</h4>
                        <Col>
                           {data.sections.map((section) => {
                              console.log("section = ", section);
                              return <Section interests={interests} />;
                           })}
                        </Col>
                        <Col>
                           <Image
                              onClick={handleZoom}
                              src={data.blueprintPic}
                              alt={`${data.roomName} blueprint`}
                              thumbnail
                              style={{
                                 cursor: "zoom-in",
                                 height: "150px",
                                 width: "auto",
                              }}
                           />
                        </Col>
                     </Row>
                  </>
                  // <Section interests={data} />
                  // <div key={data.name}>
                  //    <Row>
                  //       <h4 id={data.roomId}>{data.name}</h4>
                  //       <Col xs={6} md={8}>
                  //          {data.sectionPictures.map((pic) => {
                  //             // console.log(pic)
                  //             return (
                  //                <Section
                  //                   key={pic.sectionPictureId}
                  //                   room={data}
                  //                   pic={pic}
                  //                   interests={interests}
                  //                   setInterests={setInterests}
                  //                />
                  //             );
                  //          })}
                  //       </Col>
                  //       <Col xs={6} md={4}>
                  //          <a
                  //             href={data.picture}
                  //             target="_blank"
                  //             rel="noreferrer"
                  //             style={{ cursor: "zoom-in" }}
                  //          >
                  //             <Image src={data.picture} fluid />
                  //          </a>
                  //       </Col>
                  //    </Row>
                  //    <hr />
                  // </div>
               );
            })}
      </>
   );
}

<>
{interests && interests.rooms.map((data) => {
               // console.log(data);
               return ( <> <Section interests={data} />
                   </>
               );
            })}
      





         {floor.floorData.map((data) => {
            console.log(data)
            return (
               <div key={data.name}>
                  <Row>
                     <h4 id={data.roomId}>{data.name}</h4>
                     <Col xs={6} md={8}>
                        {data.sectionPictures.map((pic) => {
                           // console.log(pic)
                           return (
                              <Section
                                 key={pic.sectionPictureId}
                                 room={data}
                                 pic={pic}
                                 interests={interests}
                                 setInterests={setInterests}
                              />
                           );
                        })}
                     </Col>
                     <Col xs={6} md={4}>
                        <a
                           href={data.picture}
                           target="_blank"
                           rel="noreferrer"
                           style={{ cursor: "zoom-in" }}
                        >
                           <Image src={data.picture} fluid />
                        </a>
                     </Col>
                  </Row>
                  <hr />
               </div>
            );
         })}
      </>
*/
