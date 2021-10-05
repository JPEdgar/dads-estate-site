import React from "react";

// custom components
import Room from "./Room";

export default function Floor({ floorIdx, floorData }) {
   
   return (
      <>
         <h2>{floorData.floorName}</h2>
         {floorData.rooms.map((roomData, roomIdx) => {
            return ( 
               <div key={roomData.roomId} id={roomData.roomId}>
                  <Room floorIdx={floorIdx} roomIdx={roomIdx} roomData={roomData} />
               </div>
            );
         })}
      </>
   );
}
