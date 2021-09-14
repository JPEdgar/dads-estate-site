import React from "react";

// libraries
import { Image, Row, Col, Container } from "react-bootstrap";

// constants
import { firstFloor, secondFloor } from "../constants/RoomsConstants";

// custom
import Section from "./Section";

export default function Rooms() {
   const firstFloorArray = [];
   const secondFloorArray = [];

   for (const [key, value] of Object.entries(firstFloor)) {
      firstFloorArray.push(value);
   }

   for (const [key, value] of Object.entries(secondFloor)) {
      secondFloorArray.push(value);
   }

   return (
      <>
         <h3>First Floor</h3>
         {firstFloorArray.map((data) => {
            return (
               <>
                  <Row>
                     <Col>
                        <Row>
                           {data.name}
                           <Section floor="1" room={data.name} />
                           {/* <Section room="garage" /> */}
                        </Row>
                     </Col>
                     <Col sm={4}>
                        <Image src={data.picture} alt={data.name} fluid />
                     </Col>
                     <hr />
                  </Row>
               </>
            );
         })}

         <h3>Second Floor</h3>
         {secondFloorArray.map((data) => {
            return (
               <>
                  <Row>
                     <Col>{data.name}</Col>
                     <Col sm={4}>
                        <Image src={data.picture} alt={data.name} fluid />
                     </Col>
                     <hr />
                  </Row>
               </>
            );
         })}
      </>
   );
}
