import React , { useState, useEffect, Fragment } from 'react';
import axios from "axios"

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

    /* Almacenar la letra en el state */
    agregarLetra(url.data.lyrics)
  }

  return (
    <Fragment>
      <Fromulario
        consultarAPILetra={consultarAPILetra}
      />
    </Fragment>
  )
}

export default App;