export const FloorInfo = (floorId = "", floorName = "", rooms = []) => {
   return {
      floorId,
      floorName,
      rooms,
   };
};

export const RoomInfo = (
   roomId = "",
   roomName = "",
   blueprintPic = "",
   sectionsArray = []
) => {
   const sections = [];

   sectionsArray.map((sectionData) => {
      sections.push(
         SectionInfo(
            sectionData.sectionPicture,
            sectionData.sectionPictureId,
            roomName
         )
      );
      return null;
   });

   return {
      roomId,
      roomName,
      blueprintPic,
      sections,
   };
};

export const SectionInfo = (pic = "", picId = "", room = "") => {
   return {
      id: Math.random() * 1000,
      room: room,
      pic: pic,
      pictureId: picId,
      interests: [],
   };
};

export const InterestInfo = (
   picId = "",
   room = "",
   fName = "",
   lName = "",
   email = "",
   phone = "",
   desc = ""
) => {
   return {
      id: Math.random() * 1000,
      room: room,
      pictureId: picId,
      firstName: fName,
      lastName: lName,
      email: email,
      phone: phone,
      description: desc,
   };
};
