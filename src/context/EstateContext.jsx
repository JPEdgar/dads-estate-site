import { createContext } from "react";

// constants
import { houseData } from "../constants/RoomsConstants";
import { FloorInfo, RoomInfo } from "../components/HouseInfo";

export const InitiateEstateDefault = () => {
   const interestArr = [];

   houseData.map((floor, floorIdx1) => {
      interestArr.push(FloorInfo(floor.id, floor.name, []));
      floor.floorData.map((room) => {
         interestArr[floorIdx1].rooms.push( RoomInfo( room.roomId, room.name, room.blueprintPicture, room.sectionPictures ) );
         return null;
      });
      return null;
   });
   return interestArr
};

export const EstateContext = createContext(InitiateEstateDefault());

/*
function Main() {
   const value = "my context value";
   return (
       <Context.Provider value={value}>
       {children}
       </Context.Provider>;
    )
}

// import {useContext} from "react"
function MyComponent () {
    const value = useContext(Context)
    return (
        <span>
            {value}
        </span>
    )
}
*/
