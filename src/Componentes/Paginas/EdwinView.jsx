import React, { useEffect, useState } from 'react'
import axios from 'axios';


const ListadoCocteles = () => {

  const [Cocteles_Data, setCocteles] = useState(null);

  const [ Letra, setLetra] = useState('a');


  const getCocteles = async () => {

    const ApiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + Letra;
    console.log(ApiUrl);
    const respuesta = await axios.get(ApiUrl);
    setCocteles(respuesta.data.drinks);
  }

  useEffect ( () => {
    getCocteles();
  }, [])

  const CambioDeLetra = (event)=>{
    setLetra(event.target.value);
  };

  const GuardarLetra = (event) =>{
    event.preventDefault();
    console.log(Letra);
    getCocteles();
  };

  return (

    <div>

      <div className='container'>
        <form onSubmit={GuardarLetra} >
          <input type="text" name="InputLetra" id="InputLetra" className='form-control' onChange={CambioDeLetra} value={Letra}/>
          <input type="submit" name="" id="" value='Buscar' className='btn btn-sm btn-info'/>
        </form>
      </div>
    <br />
      { Cocteles_Data ? (
        Cocteles_Data.map( (Coctel) => (
          <div className='container '>

            <div className='row shadow p-3 rounded bg-light'>

              <div className='col'>
                <img className='rounded-circle' s src={Coctel.strDrinkThumb} alt="" width={200} />
              </div>

              <div className='col'>
                <p className='fw-bold'>{Coctel.strDrink}</p>
                <hr />
                <p>Clave: {Coctel.idDrink}</p>
                <p>Categoria: {Coctel.strCategory}</p>
                <p>Tipo de bebida: {Coctel.strAlcoholic}</p>
                <p>Se sirve en:{Coctel.strGlass}</p>
              </div>

              <div className='col'>
              <p className='fw-bold'>Preparacion EN</p>
              <hr />
              <p>{Coctel.strInstructions}</p>
              </div>

              <div className='col'>
              <p className='fw-bold'>Preparacion ES</p>
              <hr />
              <p>{Coctel.strInstructionsES}</p>
              </div>

            </div>

            <br />

          </div>
        ))
      ):(
        <div className='container text-center'>
                    <br />
                    <br />
                    <div class="spinner-border text-secondary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>

                </div>
      ) }
    </div>

  );


};


function EdwinView() {
  return (
    <div>

      <br />

      <div className="container text-center shadow p-3 rounded bg-light">
        <div className="row">
          <div className="col">
            <label className='fs-2'>
              
              listado de cocteles gracias a https://www.thecocktaildb.com
            </label>
          </div>
        </div>
      </div>


      <br />
      <br />

      <ListadoCocteles></ListadoCocteles>
    </div>
  )
}

export default EdwinView