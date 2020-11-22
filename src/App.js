import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';




function App() {


  //localStorage;

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if (!citasIniciales){
      citasIniciales = [];


    }

  
  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use Effect - es como el DOMContentLoaded de Vanilla Js
    useEffect ( () => {
        if(citasIniciales){

          localStorage.setItem('citas', JSON.stringify(citas));


        } else{
          localStorage.setItem('citas', JSON.stringify([]));
        }

        

    }, [citas,citasIniciales] );
        //estara al pendiente de las citas.



  //funcion que toma las citas y agrega nueva  
  const crearCita = cita => {

    guardarCitas([

      ...citas,
      cita


    ]);
 
  }
  


//Funcion que elimina cita por su id

  const eliminarCita = id => {

      const nuevasCitas = citas.filter(cita => cita.id !== id)
      guardarCitas(nuevasCitas)
  }
  
  //Mensaje condicional 
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";


  
  return ( 
      <Fragment>
      <h1>Administrador de Pacientes</h1>
      
      <div className = "container">
        <div className ="row">
          <div class="one-half column">
            
          <Formulario 
            
            crearCita = {crearCita}
            
          
          
          
          />     
          
          
          
          </div>
          
          <div className ="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (

              <Cita 
              key = {cita.id}
              cita = {cita}
              eliminarCita = {eliminarCita}
              
              
              
              
              
              />

            ))}


            </div>
          </div>
      </div>
      </Fragment>

  );
}

export default App;
