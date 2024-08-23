import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ObtenerUsuarios = () => {

  const [DatosUsuarios , setUsuarios] = useState([]);
  
  useEffect(() => { 
  const ObtenerUsuariosAsync = async () => {

      var url = 'https://jsonplaceholder.typicode.com/users'; 
      var respuesta = await axios.get(url)
      console.log(url);
      console.log(respuesta.data);
      setUsuarios(respuesta.data);
      console.log(DatosUsuarios);
  };
    ObtenerUsuariosAsync(); 
  },[]);



  DatosUsuarios.map( () => (

    <div className='container'>
      <p>
        s
      </p>
    </div>

  ))


}







function EdwinView() {
  return (
    
    <div>
      <ObtenerUsuarios></ObtenerUsuarios>
    </div>

  )
}

export default EdwinView