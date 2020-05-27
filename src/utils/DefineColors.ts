import colors from '../global/styles/colors';

export function defineBackground(name: string) {
  switch (name) {
    case 'bug':
      return colors.backgroundTypeBug;
      break;
    case 'dark':
      return colors.backgroundTypeDark;
      break;
    case 'dragon':
      return colors.backgroundTypeDragon;
      break;
    case 'electric':
      return colors.backgroundTypeEletric;
      break;
    case 'fairy':
      return colors.backgroundTypeFairy;
      break;
    case 'fighting':
      return colors.backgroundTypeFighting;
      break;
    case 'fire':
      return colors.backgroundTypeFire;
      break;
    case 'flying':
      return colors.backgroundTypeFlying;
      break;
    case 'ghost':
      return colors.backgroundTypeGhost;
      break;
    case 'grass':
      return colors.backgroundTypeGrass;
      break;
    case 'ground':
      return colors.backgroundTypeGround;
      break;
    case 'ice':
      return colors.backgroundTypeIce;
      break;
    case 'normal':
      return colors.backgroundTypeNormal;
      break;
    case 'poison':
      return colors.backgroundTypePoison;
      break;
    case 'psychic':
      return colors.backgroundTypePsychic;
      break;
    case 'rock':
      return colors.backgroundTypeRock;
      break;
    case 'steel':
      return colors.backgroundTypeSteel;
      break;
    case 'water':
      return colors.backgroundTypeWater;
      break;
    default:
      return '';
  }
}
