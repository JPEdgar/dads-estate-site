import React, { useEffect, useState } from "react";

// libraries
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Interest({
   floorIdx,
   roomIdx,
   sectionIdx,
   interestData,
   setInterests,
}) {
   // console.log("(interest.jsx) interestData = ", interestData)
   const [interestArray, setInterestArray] = useState([]);

   useEffect(() => {
      setInterests((curr) => {
         setInterestArray(
            curr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests
         );

         return curr;
      });
   }, [interestArray]);

   const handleDelete = () => {
      setInterests((curr) => {
         let tempArr =
            curr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests;

         tempArr = tempArr.filter((temp) => {
            return temp.id !== interestData.id;
         });
         console.log(tempArr);
         setInterestArray([...tempArr]);
         return curr;
      });
   };

   return (
      <Form>
         <Form.Group as={Row} className="mb-3">
            <Col xs={9}>
               <Form.Control
                  placeholder="Describe a single item of interest"
                  as="textarea"
                  rows={1}
                  // onChange={handleChange}
                  // value={roomData.description}
               />
            </Col>
            <Col xs={3}>
               <Button
                  onClick={() => handleDelete()}
                  variant="danger"
                  size="sm"
               >
                  Delete
               </Button>
            </Col>
         </Form.Group>
      </Form>
   );
}

/*
import React, { useState } from "react";

// libraries 
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Interest({ section, setInterests }) {
   const [roomData, setRoomData] = useState(section);

   React.useEffect(() => {
      console.log(roomData);
   }, [roomData]);

   const handleDelete = () => {
      setInterests((curr) => {
         return curr.filter((prev) => prev.id !== section.id);
      });
   };

   const handleChange = (e) => {
      setRoomData((curr) => {
         return { ...curr, description: e.target.value };
      });

      setInterests((curr) => {
         console.log(curr);
         return [...(curr)];
      });
   };

   return (
      <Form>
         <Form.Group as={Row} className="mb-3">
            <Col xs={9}>
               <Form.Control
                  placeholder="Describe a single item of interest"
                  as="textarea"
                  rows={1}
                  onChange={handleChange}
                  value={roomData.description}
               />
            </Col>
            <Col xs={3}>
               <Button
                  onClick={() => handleDelete()}
                  variant="danger"
                  size="sm"
               >
                  Delete
               </Button>
            </Col>
         </Form.Group>
      </Form>
   );
}
*/
