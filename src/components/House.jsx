import React, {useContext} from "react";

// custom components
import Floor from "./Floor";
import {EstateContext} from "../context/EstateContext"

export default function House() { 
   const {interests} = useContext(EstateContext)

   return (
      <>
         {interests &&
            interests.map((floorData, floorIdx) => {
               return (
                  <div key={floorData.floorId}>
                     <Floor floorIdx={floorIdx} floorData={floorData} />
                  </div>
               );
            })}
      </>
   );
}
