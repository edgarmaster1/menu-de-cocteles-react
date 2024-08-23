import React from 'react'
import imgEdwin from '../../Assets/Assets_Edwin/mascota png.png'
import imgEdgar from '../../Assets/Assets_Edgar/pngegg.png'

function Inicio() {
  return (
    <div className='container'>
      <br></br>
      
      

      <div className='row border shadow p-3 rounded bg-light'>

        <div className='col-md-2'>
          <img src={imgEdgar} width={100} alt='Imagen de edgar'></img>
        </div>

        <div className='col'>
          <div className='row'>
            <label className='fw-bold'>
              Edgar Angeles Gonzalez
            </label>
          </div>
          <div className='row'>
            <label>
            Mi nombre es Edgar, y me complace compartir con ustedes mi viaje en el desarrollo Front-End.
            Durante un año, he estado trabajando arduamente para adquirir habilidades en HTML, CSS, 
            JavaScript.
            </label>
          </div>
          <br></br>
          <div className='row'>
            <label>
            Comencé mi viaje como desarrollador Front-End aprendiendo los fundamentos de HTML y CSS, utilizando 
            etiquetas y estilos para crear diseños y estructuras web. Con el tiempo, adquirí un conocimiento 
            de estos lenguajes y desarrollé habilidades para construir interfaces de usuario atractivas y accesibles.
            </label>
          </div>
          <br></br>
          <div className='row'>
            <label>
            En resumen, mi camino como desarrollador Front-End ha sido emocionante y enriquecedor.
              He adquirido habilidades sólidas en HTML, CSS, JavaScript y React, y he aplicado estos conocimientos
              en proyectos prácticos. Estoy emocionado por seguir aprendiendo y creciendo en el campo del desarrollo 
              Front-End, y estoy listo para enfrentar nuevos desafíos y oportunidades.
            </label>
          </div>
        </div>

      </div>

      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default Inicio