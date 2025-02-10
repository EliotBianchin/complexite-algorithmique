const findArtistIndex = require("./findArtist");

const artists = [
  { id: "1", name: "Adele" },
  { id: "2", name: "Beyoncé" },
  { id: "3", name: "Coldplay" },
  { id: "4", name: "Drake" },
  { id: "5", name: "Eminem" }
];

console.log(findArtistIndex(artists, "Coldplay")); // Doit afficher "3"
console.log(findArtistIndex(artists, "Eminem"));   // Doit afficher "5"
console.log(findArtistIndex(artists, "Zaz"));      // Doit afficher -1 (pas trouvé)
