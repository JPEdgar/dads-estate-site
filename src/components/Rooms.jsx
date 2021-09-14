import React from "react";

// libraries
import { Image, Row, Col } from "react-bootstrap";

// custom
import Section from "./Section";

export default function Rooms({ floor }) {
   return (
      <>
         {floor.floorData.map((data) => {
            return (
               <div key={data.name}>
                  <Row>
                     <h4>{data.name}</h4>
                     <Col xs={8}>
                        {data.sectionPictures.map((pic) => {
                           return (
                              <Section key={pic.sectionPictureId} pic={pic} />
                           );
                        })}
                     </Col>
                     <Col xs={4}>
                        <Image src={data.picture} fluid />
                     </Col>
                  </Row>
                  <hr />
               </div>
            );
         })}
      </>
   );
}
