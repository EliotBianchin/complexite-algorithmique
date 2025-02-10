

// Code de base (O(n))
// function findArtistIndex(artists, name) {
//   for (let i = 0; i < artists.length; i++) {
//     if (artists[i].name === name) {
//       return artists[i].id;
//     }
//   }
//   return -1;
// }





// Optimisation avec recherche dichotomique (O(log n))

function findArtistIndex(artists, name) {
  let left = 0;
  let right = artists.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (artists[mid].name === name) {
      return artists[mid].id;
    } else if (artists[mid].name < name) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

module.exports = findArtistIndex;
