import React, { useState, useEffect, useRef } from "react";

// libraries
import { Image, Row, Col, Button } from "react-bootstrap";

// custom components
import Interest from "./Interest";

function InterestTemplate( picId = "", fName = "", lName = "", email = "", phone = "", des = "" ) {
   const intTemp = {
      id: Math.random() * 1000, // unique ID of interest
      pictureId: picId, // the ID the user is looking at for message
      firstName: fName, // user first name
      lastName: lName, // user last name
      email: email, // user email
      phone: phone, // user phone number
      description: des, // user desciption/message about picture
   };
   return intTemp;
}

export default function Section({ pic }) {
   const [interests, setInterests] = useState([]);

   const addInterest = (e) => {
      setInterests((curr) => [...curr, InterestTemplate()]);
      console.log(interests);
   };

   return (
      <Row>
         <Col xs={5}>
            <Image
               src={pic.sectionPicture}
               thumbnail
               style={{ height: "150px", width: "auto" }}
            />
         </Col>
         <Col xs={7}>
            {interests.map((data) => {
               return <Interest data={data} />;
            })}
         </Col>
         <Button onClick={() => addInterest()}>Add Interest</Button>
      </Row>
   );
}
