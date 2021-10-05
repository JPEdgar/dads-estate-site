import React, { useState, useEffect, useContext } from "react";

// libraries
import { Image, Row, Col, Button } from "react-bootstrap";

// custom components
import Interest from "./Interest";
import { InterestInfo } from "./HouseInfo";
import { EstateContext } from "../context/EstateContext";

export default function Section({
   floorIdx,
   roomIdx,
   sectionIdx,
   sectionData,
}) {
   const { interests, setInterests } = useContext(EstateContext);
   const [currSec, setCurrSec] = useState(
      interests[floorIdx].rooms[roomIdx].sections[sectionIdx].interests
   );

   useEffect(() => {
      setInterests((curr) => {
         const tempCurr = [...curr];
         tempCurr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests =
            currSec;
         return tempCurr;
      });
   }, [currSec, setInterests, floorIdx, roomIdx, sectionIdx]);

   const addInterest = () => {
      setInterests((curr) => {
         const temp = [...curr];
         temp[floorIdx].rooms[roomIdx].sections[sectionIdx].interests.push(
            InterestInfo()
         );
         return temp;
      });
   };

   const deleteInterest = (id) => {
      setCurrSec((curr) => {
         const temp = curr.filter((currId) => currId.id !== id);
         return temp;
      });
   };

   const logInterests = () => {
      console.log(interests[floorIdx].rooms[roomIdx].sections);
   };

   return (
      <>
         <Row className="mt-1">
            <Col>
               <a href={sectionData.pic} target="_blank" rel="noreferrer">
                  <Image
                     src={sectionData.pic}
                     style={{
                        maxHeight: "200px",
                        cursor: "zoom-in",
                     }}
                     fluid
                  />
               </a>
            </Col>
            <Col>
               {currSec.map((interestData, interestIdx) => {
                  // console.log("section.jsx -- intersetData = ", interestData);
                  return (
                     <div key={interestData.id}>
                        <Interest
                           floorIdx={floorIdx}
                           roomIdx={roomIdx}
                           sectionIdx={sectionIdx}
                           interestIdx={interestIdx}
                           interestData={interestData}
                           sectionData={interests[floorIdx].rooms[roomIdx].sections[sectionIdx]}
                           deleteInterest={deleteInterest}
                        />
                     </div>
                  );
               })}
               <Button onClick={() => addInterest()}>+ Add Interest</Button>
               {/* <Button onClick={() => logInterests()} className="mx-1"> Log </Button> */}
            </Col>
         </Row>
         <hr />
      </>
   );
}
