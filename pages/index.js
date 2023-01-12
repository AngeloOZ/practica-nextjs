import Image from "next/image";
import { useGift } from "../Hooks/useGift"
import { useState } from "react";
import axios from "axios";
import { mutate } from "swr";

export default function Home() {

  const [urlGif, setUrlGif] = useState("");
  const { gifs, isLoading } = useGift();

  const handleClickAdd = async () => {
    try {
      if (urlGif == "") return alert("Ingrese url");
      const body = {
        url: urlGif,
        author_id: 2004
      }
      await axios.post('/api/gif', body);
      setUrlGif("");
      mutate('/api/gif');
    } catch (error) {
      alert("No se pudo ingresar");
      console.log(error);
    }
  }

  return (
    <main className="mt-5">
      <div style={{ width: '400px', margin: 'auto' }}>
        <h1 className="text-center mb-3">Gif Galery</h1>
        <div className="input-group mb-3">
          <input type="text" value={urlGif} onChange={(e) => setUrlGif(e.target.value)} className="form-control" placeholder="url" />
          <button className="btn btn-outline-secondary" onClick={handleClickAdd} type="button" >Agregar</button>
        </div>

        <div>
          {
            isLoading ? <h1>Cargando....</h1> : <GridGift gifs={gifs || []} />
          }
        </div>

      </div>
    </main>
  )
}

const GridGift = ({ gifs }) => {
  return <div>
    {gifs.map((gif) => <GiftItem key={gif.id} gif={gif} />)}
  </div>
}

const GiftItem = ({ gif }) => {

  const handleClickDelete = async () => {
    try {
      await axios.delete('/api/gif', { data: gif });
      mutate('/api/gif');
    } catch (error) {
      alert('No se pudo eliminar el gif')
      console.error(error)
    }
  }

  return <div className="mb-4 d-flex align-items-center flex-column">
    {/* <Image src={gif.url} width={350} height={400} /> */}
    <div style={{ width: "350px", height: "400px", textAlign: "center" }}>
      <img src={gif.url} alt="no image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
    <div className="text-center mt-2">
      <button className="btn btn-danger" onClick={handleClickDelete} >Eliminar</button>
    </div>
  </div>
}
