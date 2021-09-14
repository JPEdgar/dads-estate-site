import React from "react";

// libraries
import { Image, Row } from "react-bootstrap";

export default function Section({ pic }) {
   return (
      <Row>
         <Image
            src={pic.sectionPicture}
            thumbnail
            style={{ height: "150px", width: "auto" }}
         />
      </Row>
   );
}
