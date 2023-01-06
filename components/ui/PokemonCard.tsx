import { Card, Grid, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from "../../interfaces"
import { useRouter } from "next/router"


interface Props {
    pokemon: SmallPokemon
}
export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`pokemon/${pokemon.id}`);
    }

    return (
        <Grid xs={6} sm={2} md={2} xl={1}>
            <Card
                isHoverable
                isPressable
                onClick={handleClick}
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={pokemon.img}
                        width="100%"
                        height={140}
                    />
                    <Card.Footer>
                        <Row justify="space-between">
                            <Text transform="capitalize">{pokemon.name}</Text>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Grid>
    )
}
