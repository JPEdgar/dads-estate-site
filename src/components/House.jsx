import React, { useState, useEffect } from "react";

// custom components
import Floor from "./Floor";

import { FloorInfo, RoomInfo } from "./HouseInfo";

// constants
import { houseData } from "../constants/RoomsConstants";

export default function House() {
   const [interests, setInterests] = useState();

   useEffect(() => {
      const interestArr = [];

      houseData.map((floor, floorIdx1) => { interestArr.push(FloorInfo(floor.id, floor.name, [])); floor.floorData.map((room) => { interestArr[floorIdx1].rooms.push( RoomInfo( room.roomId, room.name, room.blueprintPicture, room.sectionPictures ) ); return null; }); return null; });
      // console.log("(house.jsx) interestArr = ", interestArr[0].rooms[0]);
      setInterests(interestArr);
   }, []);

   return (
      <>
         {interests &&
            interests.map((floorData, floorIdx) => {
               //    console.log("(house.jsx) floorData = ", floorData)
               return (
                  <div key={floorData.floorId}>
                     <Floor
                        floorIdx={floorIdx}
                        floorData={floorData}
                        setInterests={setInterests}
                     />
                  </div>
               );
            })}
      </>
   );
}
