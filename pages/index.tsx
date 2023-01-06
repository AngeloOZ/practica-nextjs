import { GetStaticProps, NextPage } from 'next'
import { Button, Grid } from "@nextui-org/react";
import { LayoutMain } from "../components/layouts";
import { pokeApi } from '../api';
import { PokemonsListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/ui';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <LayoutMain title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
        }
      </Grid.Container>
    </LayoutMain>
  )
}

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon/?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({ ...poke, id: i + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg` }));

  return {
    props: {
      pokemons: pokemons
    }
  }
}