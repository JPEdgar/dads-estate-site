import React, { useEffect, useState } from "react";

// libraries
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Interest({
   floorIdx,
   roomIdx,
   sectionIdx,
   interestIdx,
   interestData,
   interests,
   setInterests,
   interestState,
   setInterestState,
   deleteInterest,
}) {
   // console.log("(interest.jsx) interestData = ", interestData)
   // const [interestArray, setInterestArray] = useState([]);
   const test = async () => {
      try {
         const tempInterests = await fetch(interests[floorIdx]);

         if (!tempInterests.ok) {
            throw new Error(`Error status: ${tempInterests.status}`);
         }
         console.log("tempInterests = ", tempInterests.body);

         const tempRoom = tempInterests.rooms[roomIdx];
         // console.log("tempRoom = ", tempRoom)
         const tempSection = tempRoom.sections[sectionIdx];
         // console.log("tempSection = ", tempSection)
         const tempInterest = tempSection.interests[interestIdx];
         // console.log("tempInterest = ", tempInterest)
         const tempDesciption = tempInterest.description;
         // console.log(tempDesciption);
         return await {
            tempInterests,
            tempRoom,
            tempSection,
            tempInterest,
            tempDesciption,
         };
      } catch (error) {
         console.log(error);
      }
   };

   const temp = test().then(res => console.log(res));

   useEffect(() => {
      // setInterests((curr) => {
      //    setInterestArray(
      //       curr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests
      //    );
      //    return curr;
      // });
      //    console.log(desc);
      // console.log("useEffect temp5 = ", temp5)
      console.log(temp);
   }, [temp]);

   const handleDelete = () => {
      console.log(interestData.id);
      // setInterests((curr) => {
      //    let tempArr =
      //       curr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests;
      //    tempArr = tempArr.filter((temp) => {
      //       return temp.id !== interestData.id;
      //    });
      //    console.log(tempArr);
      //    setInterestArray([...tempArr]);
      //    return curr;
      // });
   };

   const handleChange = (e) => {
      // console.log(e.target.value);
      // console.log(interests[floorIdx].rooms[roomIdx].sections[sectionIdx].interests[interestIdx].description)
      setInterests((curr) => {
         curr[floorIdx].rooms[roomIdx].sections[sectionIdx].interests[
            interestIdx
         ].description = e.target.value;
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
                  onChange={handleChange}
                  // value={interestInfo.description}
               />
            </Col>
            <Col xs={3}>
               <Button
                  onClick={() => deleteInterest(interestData.id)}
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
