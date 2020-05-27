import axios, { AxiosResponse } from 'axios';
import { defineBackground } from '../utils/DefineColors';
import { defineBadge } from '../utils/DefineBadges';
const url = 'https://pokeapi.co/api/v2/';

import { createUUID } from '../utils/CreateUUID';
interface ServerResponse {
  data: IPokemon;
}

interface IPokemon {
  name: string;
  url: string;
  types: any;
  badges: Array<Object>;
}

export async function getAllPokemon(offset: 0): Promise<any> {
  try {
    const allPokemon = await axios.get(
      `${url}pokemon?offset=${offset}&limit=3`,
    );
    let pokemons: Array<IPokemon> = [];

    for (const [idx, po] of allPokemon.data.results.entries()) {
      const p = await axios.get(po.url);
      p.data.name = po.name;
      const background = p.data.types.find((x: any) => x.slot === 1).type.name;
      const badges = p.data.types.map((b: any) => {
        return { src: defineBadge(b.type.name), id: createUUID(16) };
      });
      p.data.background = defineBackground(background);
      p.data.badges = badges;
      console.log(p.data.badges);
      pokemons.push(p.data);
    }
    return pokemons;
  } catch (e) {
    console.log('error', e);
  }
}

export async function getSearchPokemon(name: string): Promise<any> {
  try {
    let pokemons: Array<IPokemon> = [];
    const allPokemon = await axios.get(`${url}pokemon/${name}`);

    // console.log('current pokeon', allPokemon.data.types);
    const background = allPokemon.data.types.find((x: any) => x.slot === 1).type
      .name;
    const badges = allPokemon.data.types.map((b: any) => {
      return { src: defineBadge(b.type.name), id: Math.random() };
    });
    allPokemon.data.background = defineBackground(background);
    allPokemon.data.badges = badges;
    console.log(allPokemon.data.badges);
    pokemons.push(allPokemon.data);

    return pokemons;
  } catch (e) {
    console.log('error', e);
  }
}
