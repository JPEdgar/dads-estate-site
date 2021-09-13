import React from "react";

// constants
import { firstFloor, secondFloor } from "../constants/RoomsConstants";

export default function Rooms() {
   const firstFloorArray = [];
   const secondFloorArray = [];
   for (const [key, value] of Object.entries(firstFloor)) {
      firstFloorArray.push(value);
   }

   for (const [key, value] of Object.entries(secondFloor)) {
      secondFloorArray.push(value);
   }

   return (
      <>
         <h3>First Floor</h3>
         {firstFloorArray.map((data) => { return ( <> <p>{data}</p> <hr /> </> ); })}

         <h3>Second Floor</h3>
         {secondFloorArray.map((data) => { return ( <> <p>{data}</p> <hr /> </> ); })}
      </>
   );
}
