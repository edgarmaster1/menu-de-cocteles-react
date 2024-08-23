import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import UserImage from '../../../Assets/Assets_Edwin/User.png';


const MostrarUsuario = () => {
    
    const location = useLocation();
    const id = location.state;
    const [Usuario, setUsuario] = useState();

    useEffect(() => {
        getUsuarios();
    }, [])

    const getUsuarios = async () => {
        const ApiUrl = 'https://jsonplaceholder.typicode.com/users/' + id;
        const respuesta = await axios.get(ApiUrl);
        setUsuario(respuesta.data);
    };

    return (

        <div>

            {Usuario ? (
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
                  <div className='row'>
                        <div className='col '>
                            <Link to={'/Usrs_Index'}>
                            <button className='btn bg-warning'>
                                Regresar al listado
                            </button>
                            </Link>
                        </div>
                  </div>
                    

                </div>
            ) : (
                <div className='container text-center'>
                    <br />
                    <br />
                    <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>

                </div>
            )}

        </div>

    )

}


function Usrs_Details() {
    return (
        <div>
            <MostrarUsuario></MostrarUsuario>
        </div>
    )
}

export default Usrs_Details