import React, { useState } from "react";

// libraries
import { Container } from "react-bootstrap";

// custom components
import Login from "../components/Login";
import InterestModal from "../components/InterestModal";
import NavBar from "../components/NavBar";
import House from "../components/House";

const resetUser = () => {
   // return { firstName: "", lastName: "", email: "", phone: null };
   return {
      firstName: "first",
      lastName: "last",
      email: "email@email.com",
      phone: null,
   };
};

export default function Home() {
   const [interests, setInterests] = useState();
   const [user, setUser] = useState(resetUser);
   // const [show, setShow] = useState(true);
   const [show, setShow] = useState(false);
   const [modType, setModType] = useState("Login");
   const [modInfo, setModInfo] = useState({
      floorInfo: 0,
      roomInfo: 0,
      sectionInfo: 0,
   });

   return (
      <>
         {show && modType === "Login" && (
            <Login
               user={user}
               setUser={setUser}
               setShow={setShow}
               show={show}
               setModType={setModType}
            />
         )}
         {show && modType === "Interest" && (
            <>
               <InterestModal modInfo={modInfo} show={show} setShow={setShow} interests={interests} setInterests={setInterests} />
            </>
         )}
         {/* {user.firstName && user.lastName && user.email && user.phone && (  */}
         <Container className=" mt-1" id="home" fluid="md">
            <NavBar
               user={user}
               setUser={setUser}
               setShow={setShow}
               resetUser={resetUser}
            />
            <House
               interests={interests}
               setInterests={setInterests}
               setModType={setModType}
               setModInfo={setModInfo}
               setShow={setShow}
            />
         </Container>
         {/* )} */}
      </>
   );
}
