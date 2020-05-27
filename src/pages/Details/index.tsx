import React, { Props } from 'react';
import { Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Container,
  ContentAbout,
  ContentTitle,
  TitleAbout,
  ImageBall,
  TitleBaseStats,
  ListScores,
  ContentScores,
  TextStatName,
  TextScoreNumber,
} from './styles';
import DetailItem from '../../components/DetailItem';
import HeaderDetail from '../../components/Header/HeaderDetail';

import PokeballImage from '../../assets/PokeballAbout.png';
import { sumArray } from '../../utils/ArrayTools';
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

const Details: React.FC<Props<any>> = ({ route }) => {
  const { currentPokemon } = route.params;
  return (
    <Container background={currentPokemon.background}>
      <HeaderDetail />
      <DetailItem pokemon={currentPokemon} />
      <ContentTitle>
        <TitleAbout>About</TitleAbout>
        <ImageBall resizeMode="stretch" source={PokeballImage} />
      </ContentTitle>
      <ContentAbout>
        <TitleBaseStats color={currentPokemon.background}>
          Base Stats
        </TitleBaseStats>
        {currentPokemon.stats.map((item: any, i: any) => (
          <ListScores key={i}>
            <ContentScores>
              <TextStatName>{item.stat.name}</TextStatName>
            </ContentScores>
            <ContentScores>
              <TextScoreNumber>{item.base_stat}</TextScoreNumber>
            </ContentScores>
          </ListScores>
        ))}
        <ListScores>
          <ContentScores>
            <TextStatName>Total</TextStatName>
          </ContentScores>
          <ContentScores>
            <TextScoreNumber
              style={{
                fontSize: 18,
                color: '#747476',
                fontFamily: 'SFUIDisplay-Bold',
              }}
            >
              {sumArray(currentPokemon.stats)}
            </TextScoreNumber>
          </ContentScores>
        </ListScores>
        <TitleBaseStats color={currentPokemon.background}>
          Abilities
        </TitleBaseStats>
        {currentPokemon.abilities.map((ability: any, i: any) => (
          <ListScores key={i}>
            <ContentScores>
              <TextStatName>{ability.ability.name}</TextStatName>
            </ContentScores>
          </ListScores>
        ))}
      </ContentAbout>
    </Container>
  );
};
export default Details;
