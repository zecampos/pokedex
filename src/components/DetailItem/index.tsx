import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  PaternBalls,
  PaternPokebola,
  Content,
  ContentInfo,
  ContentLeft,
  ContentRight,
  TextId,
  TextName,
  ImageAvatar,
  ContentTypes,
  ImageType,
} from './styles';
import ImageCircle from '../../assets/Circle.png';
import ImageBalls from '../../assets/PatternBallsXl.png';
import { defineBadge } from '../../utils/DefineBadges';

interface IPokemon {
  name: string;
  url: string;
  types: any;
  id: number;
  badges: Array<Object>;
  sprites: {
    front_default: string;
  };
  background: string;
}
interface Props {
  pokemon: IPokemon;
}
const List: React.FC<Props> = ({ pokemon, ...rest }) => {
  return (
    <Container background={pokemon.background} {...rest}>
      <PaternBalls source={ImageCircle} />
      <PaternPokebola source={ImageBalls} />
      <Content>
        <ContentInfo>
          <ContentRight>
            <ImageAvatar
              resizeMode="contain"
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
              }}
            />
          </ContentRight>
          <ContentLeft>
            <TextId>#0{pokemon.id}</TextId>
            <TextName>{pokemon.name}</TextName>
            <ContentTypes>
              {pokemon.badges.map((type: any, i) => (
                <ImageType key={i} source={type.src} />
                // <Text key={type.src}>{type.src}</Text>
              ))}
            </ContentTypes>
          </ContentLeft>
        </ContentInfo>
      </Content>
    </Container>
  );
};

export default List;
