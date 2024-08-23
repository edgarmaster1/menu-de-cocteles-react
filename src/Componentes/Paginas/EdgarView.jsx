import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserImage from '../../Assets/Assets_Edwin/User.png';

const Artefack = () => {
  return (
    <div>
      <h1>xdxdfsdfd</h1>
    </div>
  )


}

const ObtenerUsuarios = () => {

  const [DatosUsuarios, setUsuarios] = useState([]);

  useEffect(() => {

    const ObtenerUsuariosAsync = async () => {

      var url = 'https://jsonplaceholder.typicode.com/users';
      var respuesta = await axios.get(url)

      setUsuarios(respuesta.data);
    };
    ObtenerUsuariosAsync();
  }, []);


  return (



    DatosUsuarios.map((Usuario) => (

      <div className='container'>
                    <br />

                    <div className='row shadow p-3 rounded bg-info'>
                        <div className='col text-center'>
                            <p className='fw-bold'>Datos del Usuario</p>
                            <hr />
                            <img src={UserImage} alt="User_Image" width={100} />
                            <hr />
                        </div>
                        <div className='col'>

                            <p className='fw-bold'>Usuario</p>
                            <hr />
                            <p> Clave de usuario: {Usuario.id}</p>
                            <p> Nombre: {Usuario.name}</p>
                            <p> Nombre de usuario: {Usuario.username}</p>

                        </div>
                        <div className='col'>

                            <p className='fw-bold'>Direccion</p>
                            <hr />
                            <p> Calle: {Usuario.address.street}</p>
                            <p> Suite: {Usuario.address.suite}</p>
                            <p> Codigo: {Usuario.address.zipcode}</p>

                        </div>
                        <div className='col'>

                            <p className='fw-bold'>Compania</p>
                            <hr />
                            <p> Compania: {Usuario.company.name}</p>
                            <p> Eslogan: {Usuario.company.catchPhrase}</p>
                            <p> BS: {Usuario.company.bs}</p>

                        </div>
                    </div>
                <br />
                </div>

    ))

  );


}


function EdgarView() {
  return (
    <div >
      <ObtenerUsuarios></ObtenerUsuarios>
    </div>
  )
}

export default EdgarView


