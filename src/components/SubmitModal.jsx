import React, { useState, useContext, useEffect } from "react";

// libraries
import { Modal, Button, Image, Row, Col } from "react-bootstrap";

// context
import { EstateContext } from "../context/EstateContext";
import { UserContext } from "../context/UserContext";

export default function SubmitModal({ preSub, setPreSub }) {
   const { interests } = useContext(EstateContext);
   const { user } = useContext(UserContext);

   const tempArr = [];
   const [submitArray, setSubmitArray] = useState([]);

   const submitData = (interestsData, roomData, sectionData, intData) => {
      // console.log("interestsData = ", interestsData);
      // console.log("roomData = ", roomData);
      // console.log("sectionData = ", sectionData);
      //   console.log("intData = ", intData);

      const returnVal = {
         floorName: interestsData.floorName,
         roomName: roomData.roomName,
         //  sectionId: sectionData.id,
         pic: sectionData.pic,
         interestId: intData.id,
         description: intData.description,
         // p
      };
      return returnVal;
   };

   useEffect(() => {
      interests.map((interestsData) => {
         interestsData.rooms.map((roomData) => {
            roomData.sections.map((sectionData) => {
               if (sectionData.interests.length > 0) {
                  sectionData.interests.map((intData) => {
                     tempArr.push(
                        submitData(
                           interestsData,
                           roomData,
                           sectionData,
                           intData
                        )
                     );
                     return null;
                  });
               }
               return null;
            });
            return null;
         });
         return null;
      });
      //   console.log(submitArray)
      setSubmitArray(tempArr);
   }, [interests]);

   const handleClose = () => setPreSub(false);

   return (
      <div>
         <Modal show={preSub} centered size="md">
            <Modal.Header closeButton>
               <Modal.Title>Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <>
                  {submitArray.length > 0 &&
                     submitArray.map((data) => {
                        return (
                           <>
                              <Row>
                                 <h4>
                                    {data.floorName} - {data.roomName}
                                 </h4>
                              </Row>
                              <Row>
                                 <Col xs={5}>
                                 <a href={data.pic} target="_blank" rel="noreferrer" style={{ cursor: "zoom-in" }} >
                                    <Image src={data.pic} fluid />
                                    </a>
                                 </Col>
                                 <Col xs={7}>
                                    <h5>{data.description}</h5>
                                 </Col>
                              </Row>
                              <hr/>
                           </>
                        );
                     })}
               </>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
               <Button onClick={() => console.log(interests)}>Log</Button>
               <div>
                  <Button
                     variant="warning"
                     className="mx-1"
                     onClick={handleClose}
                  >
                     Return
                  </Button>
                  <Button onClick={handleClose}>Submit</Button>
               </div>
            </Modal.Footer>
         </Modal>
      </div>
   );
}
