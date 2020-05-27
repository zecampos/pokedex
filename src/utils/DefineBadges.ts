export function defineBadge(name: string): String {
  switch (name) {
    case 'bug':
      return require('../assets/badge/Bug.png');
      break;
    case 'dark':
      return require('../assets/badge/Dark.png');
      break;
    case 'dragon':
      return require('../assets/badge/Dragon.png');
      break;
    case 'eletric':
      return require('../assets/badge/Electric.png');
      break;
    case 'fairy':
      return require('../assets/badge/Fairy.png');
      break;
    case 'fighting':
      return require('../assets/badge/Fighting.png');
      break;
    case 'fire':
      return require('../assets/badge/Fire.png');
      break;
    case 'flying':
      return require('../assets/badge/Flying.png');
      break;
    case 'ghost':
      return require('../assets/badge/Ghost.png');
      break;
    case 'grass':
      return require('../assets/badge/Grass.png');
      break;
    case 'ground':
      return require('../assets/badge/Ground.png');
      break;
    case 'ice':
      return require('../assets/badge/Ice.png');
      break;
    case 'normal':
      return require('../assets/badge/Normal.png');
      break;
    case 'poison':
      return require('../assets/badge/Poison.png');
      break;
    case 'psychic':
      return require('../assets/badge/Psychic.png');
      break;
    case 'rock':
      return require('../assets/badge/Rock.png');
      break;
    case 'steel':
      return require('../assets/badge/Steel.png');
      break;
    case 'water':
      return require('../assets/badge/Water.png');
      break;
    default:
      return require('../assets/badge/Normal.png');
  }
}
