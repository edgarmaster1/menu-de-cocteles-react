import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BarraNavegacion from './Componentes/Layout/Navbar';

import InicioPage from './Componentes/Paginas/Inicio';
import EdgarView from './Componentes/Paginas/EdgarView';
import EdwinView from './Componentes/Paginas/EdwinView';

import Usrs_Index from './Componentes/Paginas/Usuarios/Usrs_Index';
import Usrs_Delete from './Componentes/Paginas/Usuarios/Usrs_Delete';
import Usrs_Details from './Componentes/Paginas/Usuarios/Usrs_Details';



const App = () => {
  return (
    <Router>
      <BarraNavegacion></BarraNavegacion>
      <br></br>
      <Routes>
        <Route  path='/'  Component={InicioPage} ></Route>
        <Route path='/EdgarView' Component={EdgarView} ></Route>
        <Route path='/EdwinView' Component={EdwinView} ></Route>

        <Route path='/Usrs_Index' Component={Usrs_Index} ></Route>
        <Route path='/Usrs_Delete' Component={Usrs_Delete} ></Route>
        <Route path='/Usrs_Details' Component={Usrs_Details} ></Route>
      </Routes>
      <br></br>
    </Router>
  );
}

export default App;