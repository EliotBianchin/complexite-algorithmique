const assignStages = require("./assignStages");

const artists = [
  { id: "1", name: "Adele", genre: "Pop", stage: "" },
  { id: "2", name: "Metallica", genre: "Metal", stage: "" },
  { id: "3", name: "Daft Punk", genre: "Electro", stage: "" }
];

const stages = [
  { id: "A", name: "Main Stage", genres: ["Pop", "Rock"] },
  { id: "B", name: "Metal Stage", genres: ["Metal"] },
  { id: "C", name: "Electro Stage", genres: ["Electro", "Techno"] }
];

assignStages(artists, stages);

console.log(artists);
