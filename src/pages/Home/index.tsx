import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  FlatList,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { AxiosResponse } from 'axios';

import TextField from '../../components/TextField';
import { Container, ImageBackground, Title, SubTitle, Content } from './styles';
import HeaderHome from '../../components/Header/HeaderHome';
import Pokeball from '../../assets/Pokeball.png';
import List from '../../components/List';

import useDebounce from '../../hooks/useDebounce';
import { getAllPokemon, getSearchPokemon } from '../../services/api';

interface IPokemons {
  list: IPokemon;
}
interface ServerResponse {
  data: IPokemon;
}

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
const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [offSet, setOffSet] = useState<any>(0);
  const [searchPokemon, setSearchPokemon] = useState('');
  const debouncedSearchTerm = useDebounce(searchPokemon, 500);

  useEffect(() => {
    console.log('debouncedSearchTerm', debouncedSearchTerm.length);

    async function search() {
      if (debouncedSearchTerm) {
        console.log('consultando');
        const results = await getSearchPokemon(debouncedSearchTerm);
        console.log('results', results);
        setPokemons(results);
      } else {
        const pokemon = await getAllPokemon(0);
        setOffSet(offSet);
        setPokemons(pokemon);
        setLoading(false);
      }
    }
    search();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await getAllPokemon(offSet);
      setOffSet(offSet + 3);
      setPokemons(pokemon);
      setLoading(false);
    }
    getPokemon();
  }, []);

  async function loadPokemons() {
    try {
      const novosPokemons: Array<any> = await getAllPokemon(offSet);

      // novosPokemons.map(item => {
      //   console.log('item', item);
      //   return setPokemons(pokemons => [...pokemons, ...item]);
      // });
      setPokemons(pokemons => [...pokemons, ...novosPokemons]);
      setOffSet(offSet + 3);
    } catch (e) {
      console.log('erro ao obter mais pokemons', e);
    }
  }

  return (
    <Container>
      <ImageBackground source={Pokeball} />
      <Content>
        <HeaderHome />
        <Title>Pokédex</Title>
        <SubTitle>
          Search for Pokémon by name or using the National Pokédex number.
        </SubTitle>
        <TextField
          icon="search"
          name="search"
          placeholder="What Pokémon are you looking for?"
          autoCapitalize="none"
          autoCompleteType="off"
          onChangeText={value => setSearchPokemon(value)}
        />
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView style={{ flex: 1 }}>
            {loading ? (
              <>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}
                >
                  <ActivityIndicator />
                </View>
              </>
            ) : (
              <FlatList
                scrollEnabled
                contentInset={{ bottom: 0 }}
                style={{ marginTop: 15, marginBottom: 0, flexGrow: 1 }}
                data={pokemons}
                renderItem={({ item }) => <List pokemon={item} />}
                keyExtractor={(item: any) => item.name}
                // onEndReached={() => loadPokemons()}
                // onScrollToTop={() => console.log('top')}
                // onEndReachedThreshold={0}
                refreshing={loading}
              />
            )}
          </ScrollView>
        </View>
      </Content>
    </Container>
  );
};

export default Home;
