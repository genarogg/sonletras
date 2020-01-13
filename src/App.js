import React , { useState, useEffect, Fragment } from 'react';


import Fromulario from "./components/Formulario"
function App(){

  /* Utilizar useState con 3 states */
  const [ artista, agregarArtista ] = useState("");
  const [ letra, agregarLetra ] = useState([]);
  const [ info, agregarInfo ] = useState({});

  /* Metodo para consultar la Api de letras de canciones */
  const consultarAPILetra = busqueda => {
        console.log(busqueda)
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