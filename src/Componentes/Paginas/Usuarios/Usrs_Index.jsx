import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



const ListadoUsuarios = () => {

  //LISTADO DE USUARIOS TRAIDO DESDE LA API
  const [Datos_Usuarios, setUsuarios] = useState([]); 

  // ESTE ES EL ESTADO DEL MODAL ABIERTO O CERRADO
  const [Modal_Eliminar, setModalEliminar] = useState(false); 

  const [Usuario_Seleccionado, setUsuarioSeleccion] = useState(null); 

  //AL RENDERIZAR LA VISTA ESTO SE RENDERIZARA PRIMERO
  useEffect(() => {
    getUsuarios();
  }, []);

  // PARA TRAER DATOS
  const getUsuarios = async () => {
    const ApiUrl = 'https://jsonplaceholder.typicode.com/users';
    const respuestaGet = await axios.get(ApiUrl);
    setUsuarios(respuestaGet.data);
  };

  //METODO PARA ABRIR MODAL
  const abrirModalEliminar = (UserToDelete) => {
    setUsuarioSeleccion(UserToDelete);
    setModalEliminar(!Modal_Eliminar);
  };

  // FUNCION PARA ELIOMINAR EL DATO 
  const eliminarUsuario = ()=>{
    setUsuarios(Datos_Usuarios.filter(u=>u.id!==Usuario_Seleccionado.id));
    setModalEliminar(false);
  };

  // METODO DE RETORNO
  return (

    <div className='container border shadow rounded bg-light'>
      <br />
      {/* <div className='row text-center'>
        <div className='col'></div>
        <div className='col'>
          <button className='btn bg-info'>Añadir Nuevo Usuario</button>
        </div>
        <div className='col'></div>
      </div> */}
      <br />

      <table className='table table-striped '>

        <thead className='bg-info'>
          <tr>
            <th>Nombre</th>
            <th>Nombre de usuario</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Sitio Web</th>
            <th>Compania</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {
            Datos_Usuarios.map((Usuario) => (
              <tr>
                <td>{Usuario.name}</td>
                <td>{Usuario.username}</td>
                <td>{Usuario.email}</td>
                <td>{Usuario.phone}</td>
                <td>{Usuario.website}</td>
                <td>{Usuario.company.name}</td>

                <td>
                  <Link to={'/Usrs_Details'} state={Usuario.id}>
                    <button className="btn btn-sm btn-info" >
                      Detalles
                    </button>
                  </Link>
                  &nbsp;
                    <button className="btn btn-sm btn-danger" onClick={ ()=>abrirModalEliminar(Usuario) }>
                      Eliminar
                    </button>
                </td>

              </tr>
            ))
          }
        </tbody>

      </table>

      {/*
        ESTE MODAL ES PARA ABRIR LA SECCION DE ELIMINAR
      */}

      

    </div>

  );

};



function Usrs_Index() {
  return (
    <div>
      <ListadoUsuarios></ListadoUsuarios>
    </div>
  )
}

export default Usrs_Index