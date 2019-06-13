const MOVIE = 'movie'
const MUSIC = 'music'
const VERSE = 'verse'

function map(code) {
  switch (code) {
    case 100:
      return MOVIE;
      break;
    case 200:
      return MUSIC;
      break;
    case 300:
      return VERSE;
      break;
    default:
      return '';
  }
}

export {
  map,
  MOVIE,
  MUSIC,
  VERSE
}