
// rooms images
import F1_Outline from "../images/locations/Floor1-Outline.jpg";
import F1_Garage from "../images/locations/Floor1-Garage.jpg";
import F1_Entry from "../images/locations/Floor1-Entry.jpg";
import F1_Kitchen from "../images/locations/Floor1-Kitchen.jpg";
import F1_Dining from "../images/locations/Floor1-DiningRoom.jpg";
import F1_Living from "../images/locations/Floor1-LivingRoom.jpg";
import F1_Laundry from "../images/locations/Floor1-Laundry.jpg";
import F1_Office from "../images/locations/Floor1-Office.jpg";
import F1_Bath from "../images/locations/Floor1-Bathroom.jpg";
import F1_Stairs from "../images/locations/Floor1-Stairs.jpg";
import F2_Outline from "../images/locations/Floor2-Outline.jpg";
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

const roomInfo = (name, picture) => {
   return { name: name, picture, picture };
};

// problem here`
const section = (room, loc) => {
   return `${room}_${loc}_${month}_${day}_${year}`;
};

export const firstFloor = {
   // OUTLINE: roomInfo("Outline", F1_Outline),
   GARAGE: roomInfo("Garage", F1_Garage),
   ENTRY: roomInfo("Entry", F1_Entry),
   KITCHEN: roomInfo("Kitchen", F1_Kitchen),
   DINING_ROOM: roomInfo("Dining Room", F1_Dining),
   LIVING_ROOM: roomInfo("Living Room", F1_Living),
   LAUNDRY: roomInfo("Kitchen Hall/Laundry", F1_Laundry),
   OFFICE: roomInfo("Downstairs Office", F1_Office),
   DWN_BATHROOM: roomInfo("Downstairs Bathroom", F1_Bath),
   STAIRS: roomInfo("Stairs", F1_Stairs),
};

export const secondFloor = {
   // OUTLINE: roomInfo("Outline", F2_Outline),
   UPS_HALL: roomInfo("Upstairs Hallway", F2_Hall),
   MASTER_BEDROOM: roomInfo("Master Bedroom", F2_MBed),
   UPS_BATHROOM: roomInfo("Master Bathroom", F2_Bath),
   GUEST_BEDROOM: roomInfo("Guest Bedroom", F2_Bed),
   STORAGE: roomInfo("Guest Bedroom Space", F2_Storage),
};

export const firstFloorSection = {
   garage: [section("test1", test1), section("test2", test2), section("test3", test3), section("test4", test4)],
   entry: [section()],
   kitchen: [section()],
   diningRoom: [section()],
   livingRoom: [section()],
   laundry: [section()],
   office: [section()],
   bathroom: [section()],
   stairs: [section()],
};
