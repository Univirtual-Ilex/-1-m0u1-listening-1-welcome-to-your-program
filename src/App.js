import React from 'react';
import Fondo from './components/Fondo'
import {BrowserRouter, Route, HashRouter } from 'react-router-dom'

// eslint-disable-next-line
import Modal from './components/Generales/Modal'
import Gstyle from './App/gstyle' // Estilos globales
import Ilex from './App/variables' //Variables

// Actividades
// Actividad 1

// eslint-disable-next-line
import Home from './components/Home'
// eslint-disable-next-line
import Actividad1 from './components/Actividad1'
// eslint-disable-next-line
import Actividad2 from './components/Actividad2'
// eslint-disable-next-line
import Actividad2A from './components/Actividad2A/Actividad2A';
// eslint-disable-next-line
import Actividad3 from './components/Actividad3'


/**
 * Ruta /home
Fondo
	Contenedor
		//bloque1
		  Titulo-app color
		  Resumen /Resumen
		  Boton-inicio /Boton-inicio
		//bloque2
      imagen-cabecera *** animada con GSAP
    
 */

/* 
Props del modal:
  ok = muestra el modal con un feedback base,
  err = muestra el modal con un feeback base
  visible = true o false // mustra u oculta el modal
  w= define el ancho en porcentaje
  // si se incluye contenido con la prop err se renderiza con el modal error
  // si se incluye contenido con la prop ok se renderiza con el modal ok
  // si se incluye contenido sin las prop (ok y err) se renderiza el modal base

*/

const App = () => {


  return(

    <>
      
      <Gstyle/>

      <Fondo degradado={Ilex.degradado('-30deg',Ilex.rosa,Ilex.azul,Ilex.violeta)}>
        <HashRouter>
          <Route path='/' exact component={Home} />
          <Route path='/actividad1' component={Actividad1} />
          <Route path='/actividad2' component={Actividad2} />
          <Route path='/actividad2a' component={Actividad2A} />
          <Route path='/actividad3' component={Actividad3} />
        </HashRouter>
      </Fondo>
      <Modal w='30'>
      </Modal>

    </>


  ) // La etiqueta <> </> Hace referencia a los fragments en react
}

export default App;
