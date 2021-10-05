import React, { useContext, useEffect } from "react";

// libraries
import { Form, Button, Row, Col } from "react-bootstrap";

// contexts
import { EstateContext } from "../context/EstateContext";

export default function Interest({ floorIdx, roomIdx, sectionIdx, interestIdx, interestData, sectionData, deleteInterest, }) {
   const { setInterests } = useContext(EstateContext);

   useEffect(() => {
      // console.log(sectionData)
      setInterests((curr) => {
         const tempCurr = [...curr];
         // console.log("interestData = ", interestData)
         // tempCurr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests[ interestIdx ].room = interestData.room;
         // console.log("interestData = ", interestData)
         tempCurr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests[ interestIdx ].room = sectionData.room;
         tempCurr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests[ interestIdx ].pictureId = sectionData.pictureId;
         // console.log("tempCurr = ", tempCurr)
         return tempCurr;
      });

   },[])

   const handleChange = (e) => {
      setInterests((curr) => {
         const tempCurr = [...curr];
         tempCurr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests[ interestIdx ].description = e.target.value;
         return tempCurr;
      });
   };

   return (
      <Form>
         <Form.Group as={Row} className="mb-3">
            <Col xs={9}>
               <Form.Control placeholder="Describe a single item of interest" as="textarea" rows={1} onChange={handleChange} />
            </Col>
            <Col xs={3}>
               <Button onClick={() => deleteInterest(interestData.id)} variant="danger" size="sm" > Delete </Button>
            </Col>
         </Form.Group>
      </Form>
   );
}
