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
