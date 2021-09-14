import React from "react";

// libraries
import { Image } from "react-bootstrap";

// custom
import { firstFloorSection } from "../constants/RoomsConstants";

export default function Section({ floor, room }) {
   const swapRoom = () => {
      switch (room) {
         case "Garage":
            return <Image src={firstFloorSection} thumbnail />;
         default:
            break;
      }
   };

   return <>{swapRoom()}</>;
}
