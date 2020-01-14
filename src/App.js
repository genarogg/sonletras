import React , { useState, useEffect, Fragment } from 'react';
import axios from "axios"
import Cancion from "./components/Cancion"

import Fromulario from "./components/Formulario"
function App(){

  /* Utilizar useState con 3 states */
  const [ artista, agregarArtista ] = useState("");
  const [ letra, agregarLetra ] = useState([]);
  const [ info, agregarInfo ] = useState({});

  /* Metodo para consultar la Api de letras de canciones */
  const consultarAPILetra = async busqueda => {
    const { artista, cancion }  = busqueda;
    const url = await axios.get(`https://api.lyrics.ovh/v1/${artista}/${cancion}`)

    /* almacenar el artista */
    agregarArtista(artista)
    
    /* Almacenar la letra en el state */
    agregarLetra(url.data.lyrics)
    
  } 

  /* Metodo para consultar el API de informacion */
  const consultarAPIInfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
    const resultado = await axios.get(url)

    
    

    agregarInfo(resultado.data.artists[0])
    /* console.log(info) */
  }

  useEffect ( () => {
    consultarAPIInfo()
  }, [ artista ])

  return (
    <Fragment>
      <Fromulario
        consultarAPILetra={consultarAPILetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;