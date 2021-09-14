// rooms images
// import F1_Outline from "../images/locations/Floor1-Outline.jpg";
import F1_Garage from "../images/locations/Floor1-Garage.jpg";
import F1_Entry from "../images/locations/Floor1-Entry.jpg";
import F1_Kitchen from "../images/locations/Floor1-Kitchen.jpg";
import F1_Dining from "../images/locations/Floor1-DiningRoom.jpg";
import F1_Living from "../images/locations/Floor1-LivingRoom.jpg";
import F1_Laundry from "../images/locations/Floor1-Laundry.jpg";
import F1_Office from "../images/locations/Floor1-Office.jpg";
import F1_Bath from "../images/locations/Floor1-Bathroom.jpg";
import F1_Stairs from "../images/locations/Floor1-Stairs.jpg";
// import F2_Outline from "../images/locations/Floor2-Outline.jpg";
import F2_Hall from "../images/locations/Floor2-Hallway.jpg";
import F2_MBed from "../images/locations/Floor2-MasterBedroom.jpg";
import F2_Bath from "../images/locations/Floor2-Bathroom.jpg";
import F2_Bed from "../images/locations/Floor2-Bedroom.jpg";
import F2_Storage from "../images/locations/Floor2-Storage.jpg";

// sections images - garage
import test1 from "../images/01.jpg";
import test2 from "../images/02.jpg";
import test3 from "../images/03.jpg";
import test4 from "../images/04.jpg";

const month = 9;
const day = 13;
const year = 2021;

const roomInfo = (name, picture, sectionPictures) => {
   const sectionPicArr = [];
   sectionPictures.map((data) => {
      sectionPicArr.push(sectionInfo(name, data));
   });
   return { name: name, picture: picture, sectionPictures: sectionPicArr };
};

const sectionInfo = (room, picture) => {
   return {
      sectionPictureId: `${room}_${picture}_${month}_${day}_${year}`,
      sectionPicture: picture,
   };
};

const firstFloor = {
   name: "First Floor",
   floorData: [
      roomInfo("Garage", F1_Garage, [test1, test2, test3, test4]),
      roomInfo("Entry", F1_Entry, [test1, test2, test3, test4]),
      roomInfo("Kitchen", F1_Kitchen, [test1, test2, test3, test4]),
      roomInfo("Dining Room", F1_Dining, [test1, test2, test3, test4]),
      roomInfo("Living Room", F1_Living, [test1, test2, test3, test4]),
      roomInfo("Kitchen Hall/Laundry", F1_Laundry, [ test1, test2, test3, test4, ]),
      roomInfo("Downstairs Office", F1_Office, [test1, test2, test3, test4]),
      roomInfo("Downstairs Bathroom", F1_Bath, [test1, test2, test3, test4]),
      roomInfo("Stairs", F1_Stairs, [test1, test2, test3, test4]),
   ],
};

const secondFloor = {
   name: "Second Floor",
   floorData: [
      roomInfo("Upstairs Hallway", F2_Hall, [test1, test2, test3, test4]),
      roomInfo("Master Bedroom", F2_MBed, [test1, test2, test3, test4]),
      roomInfo("Master Bathroom", F2_Bath, [test1, test2, test3, test4]),
      roomInfo("Guest Bedroom", F2_Bed, [test1, test2, test3, test4]),
      roomInfo("Guest Bedroom Space", F2_Storage, [test1, test2, test3, test4]),
   ],
};

export const houseData = [firstFloor, secondFloor];
