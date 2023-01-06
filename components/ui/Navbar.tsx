import { Container, Spacer, Text, theme } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    // const { theme } = useTheme();
    return (
        <div style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            padding: "0 20px",
            backgroundColor: theme?.colors.gray900.value,
        }}>
            <Link href={"/"}>
                <Container display='flex' alignItems='center'>
                    <Image
                        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
                        alt="Imagen icono"
                        width={60}
                        height={60}
                    />
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okémon</Text>
                </Container>
            </Link>

            <Spacer css={{ flex: 1 }} />
            <Text color='white'>favoritos</Text>
        </div>
    )
}
