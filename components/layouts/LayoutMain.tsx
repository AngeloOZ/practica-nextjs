
import Head from "next/head"
import { Navbar } from "../ui";

interface Props {
    title?: string;
    children:
    | JSX.Element[]
    | JSX.Element;
}

export const LayoutMain: React.FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>Pokemin App</title>
                <meta name="author" content="Angello Ordonez" />
                <meta name="description" content="Informacion sobre pokemon XXXXX" />
                <meta name="keywords" content=", pokemon, pokedex" />
                <title>{title || ""}</title>
            </Head>
            <Navbar />
            <main style={{ padding: "20px 20px" }}>
                {children}
            </main>
        </>
    )
}

