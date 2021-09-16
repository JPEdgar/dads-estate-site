import React from "react";

// libraries
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Interest( {data}) {
   return (
      <Form>
         <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1" >
            <Col xs={9}>
               <Form.Control placeholder="Describe a single item of interest" as="textarea" rows={1} />
            </Col>
            <Col xs={3}>
               <Button variant="danger" size="sm"> Delete </Button>
            </Col>
         </Form.Group>
      </Form>
   );
}
