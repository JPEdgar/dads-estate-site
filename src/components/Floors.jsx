import React from "react";

// custom
import Rooms from "./Rooms";

// constants
import { houseData } from "../constants/RoomsConstants";

export default function Floors() {
   return (
      <>
         {houseData.map((floor) => {
            return (
               <div key={floor.name}>
                  <h2 style={{ color: "red" }}>{floor.name}</h2>
                  <Rooms floor={floor} />
                  <div id="test">...</div>
               </div>
            );
         })}
      </>
   );
}
