// Code de base (O(n * m))
// function assignStages(artists, stages) {
//   for (let stage of stages) {
//     for (let artist of artists) {
//       if (stage.genres.includes(artist.genre)) {
//         artist.stage = stage.id;
//         break;
//       }
//     }
//   }
// }

// Optimisation (O(n + m))


function assignStages(artists, stages) {
    let genreToStage = {};
  
    for (let stage of stages) {
      for (let genre of stage.genres) {
        genreToStage[genre] = stage.id;
      }
    }
  
    for (let artist of artists) {
      if (artist.genre in genreToStage) {
        artist.stage = genreToStage[artist.genre];
      }
    }
  }
  
  module.exports = assignStages;
  