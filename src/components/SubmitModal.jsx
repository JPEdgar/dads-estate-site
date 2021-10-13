import React, { useState, useContext, useEffect } from "react";

// libraries
import { Modal, Button, Image, Row, Col, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

// context
import { EstateContext, InitiateEstateDefault } from "../context/EstateContext";
import { UserContext } from "../context/UserContext";

export default function SubmitModal({ preSub, setPreSub }) {
   const { interests, setInterests } = useContext(EstateContext);
   const { user } = useContext(UserContext);

   const userId = "user_IvQdA112gfEnTOCe2qrOB";
   const serviceId = "service_2ga63ks";
   const templateId = "template_unvtt2i";

   const tempArr = [];
   const [submitArray, setSubmitArray] = useState([]);

   const submitData = (interestsData, roomData, sectionData, intData) => {
      console.log(intData);
      const returnVal = {
         floorName: interestsData.floorName,
         roomName: roomData.roomName,
         pic: sectionData.pic,
         // picId: intData.pictureId,
         // interestId: intData.id,
         description: intData.description,
      };
      return returnVal;
   };

   useEffect(() => {
      // console.log("user = ", user);
      // console.log("submitArray = ", submitArray);
      // console.log(JSON.stringify(submitArray))
   }, [submitArray]);

   useEffect(() => {
      interests.map((interestsData) => {
         interestsData.rooms.map((roomData) => {
            roomData.sections.map((sectionData) => {
               if (sectionData.interests.length > 0) {
                  sectionData.interests.map((intData) => {
                     // console.log(intData)
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

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("in submit");
      // console.log(e.target);
      emailjs
         .sendForm(serviceId, templateId, e.target, userId)
         .then((res) => {
            // console.log("success!", res.status, res.text);
            setInterests(InitiateEstateDefault());
            setPreSub(false);
         })
         .catch((err) => {
            console.log("Failed. ", err);
         });
   };

   const handleClose = () => setPreSub(false);

   return (
      <div>
         <Modal
            show={preSub}
            centered
            size="md"
            onHide={() => setPreSub(false)}
         >
            <Modal.Header closeButton>
               {submitArray.length > 0 ? (
                  <>
                     <Modal.Title>Review</Modal.Title>
                  </>
               ) : (
                  <Modal.Title>Interests are empty.</Modal.Title>
               )}
            </Modal.Header>
            <Modal.Body>
               <>
                  <h5>
                     Limit of 20 interests. You currently have{" "}
                     {submitArray.length}
                     {submitArray.length > 1 ? " interests" : " interst"}
                  </h5>
                  {submitArray.length > 0 && (
                     <form onSubmit={handleSubmit}>
                        <Row>
                           <Col>
                              <input
                                 className="form-control"
                                 type="text"
                                 value={user.firstName}
                                 name="fName"
                                 readOnly
                              />
                           </Col>
                           <Col>
                              <input
                                 className="form-control"
                                 type="text"
                                 value={user.lastName}
                                 name="lName"
                                 readOnly
                              />
                           </Col>
                        </Row>
                        <Row className="mb-2">
                           <Col>
                              <input
                                 className="form-control"
                                 type="text"
                                 value={user.email}
                                 name="email"
                                 readOnly
                              />
                           </Col>
                           {user.phone && (
                              <Col>
                                 <input
                                    className="form-control"
                                    type="text"
                                    value={user.phone}
                                    name="phone"
                                    readOnly
                                 />
                              </Col>
                           )}
                        </Row>
                        {submitArray.map((data, idx) => {
                           // console.log(data);
                           return (
                              <div
                                 key={`${data.floorName} - ${
                                    data.roomName
                                 } ${Math.random()}`}
                              >
                                 <input
                                    className="form-control"
                                    type="text"
                                    value={`${data.floorName} - ${data.roomName}`}
                                    name={`location${idx}`}
                                    readOnly
                                 />
                                 <a
                                    href={data.pic}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ cursor: "zoom-in" }}
                                 >
                                    <Image src={data.pic} fluid />
                                 </a>
                                 <input
                                    className="form-control mb-2"
                                    type="text"
                                    value={data.description}
                                    name={`interestDescription${idx}`}
                                    readOnly
                                 />
                                 <input
                                    style={{ display: "none" }}
                                    className="form-control"
                                    type="text"
                                    value={data.pic}
                                    name={`picInfo${idx}`}
                                    readOnly
                                 />
                                 {/* <input style={{ display: "none" }} className="form-control" type="text" value={data.picId} name={`picId${idx}`} readOnly /> */}
                              </div>
                           );
                        })}
                        <Button type="submit">Submit</Button>
                        <Button
                           className="mx-2"
                           variant="success"
                           onClick={handleClose}
                        >
                           Close
                        </Button>
                     </form>
                  )}
               </>
            </Modal.Body>
         </Modal>
      </div>
   );
}
