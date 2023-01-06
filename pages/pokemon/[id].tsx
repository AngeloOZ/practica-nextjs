import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { LayoutMain } from '../../components/layouts';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

interface Props {
    pokemon: Pokemon
}

const PagePokemon: NextPage<Props> = ({ pokemon }) => {
    return (
        <LayoutMain>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || ''}
                                alt={pokemon.name}
                                width={"100%"}
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button color={'gradient'}>Guardar en favoritos</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    height={100}
                                    width={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    height={100}
                                    width={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    height={100}
                                    width={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    height={100}
                                    width={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </LayoutMain>
    )
}

export default PagePokemon;


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const listPokemons = [...Array(151)].map((value, index) => `${index + 1}`)

    return {
        // paths: [
        //     {
        //         params: { id: '1' }
        //     }
        // ],
        paths: listPokemons.map(id => ({ params: { id } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}