import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
const { v4: uuidv4 } = require('uuid');



const Formulario = ({crearCita}) => {
    
    //crear state de citas

    const [cita, actualizarCita] = useState({

        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''





    });

    const [error,actualizarError] = useState(false)


    //funcion para tomar el imput
    const actualizarState = e => {

        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
              

        })


    }

    //destructuring object 
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // cuando el usuario presiona el boton enviar
    const submitCita = e => {
        e.preventDefault();
        
        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){

            actualizarError(true);
            return;
        
        
        
        }

        //Eliminar el mensaje previo

        actualizarError(false);


        //asignar ID
        cita.id = uuidv4();
        console.log(cita);


        //crear cita

        crearCita(cita);
          



        //reiniciar form
        actualizarCita({

            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''


        })
        
  

    }



    
    return (  

        <Fragment>
            <h2>Crear Cita</h2>


        {error ? <p className ="alerta-error">Todos los campos son obligatorios.</p>   : null}    
        <form 
        onSubmit ={submitCita}
        >
            
            <label>Nombre Mascota</label>
            <input 
                type = "text"
                name = "mascota"
                className = "u-full-width"
                placeholder = "Nombre Mascota"
                onChange = {actualizarState}
                value = {mascota}
                
            />

            <label>Nombre Dueño</label>
            <input 
                type = "text"
                name = "propietario"
                className = "u-full-width"
                placeholder = "Nombre dueño de la mascota"
                
                onChange = {actualizarState}
                value = {propietario}
            />
            <label>Fecha</label>
            <input 
                type = "date"
                name = "fecha"
                className = "u-full-width"

                onChange = {actualizarState}
                value = {fecha}                
            
            
            />
            <label>Hora</label>
            <input 
                type = "time"
                name = "hora"
                className = "u-full-width"
                
                onChange = {actualizarState}
                value = {hora}
            
            />
            <label>Sintomas</label>
            <textarea
            
            className= "u-full-width"
            name = "sintomas"
            onChange = {actualizarState}
            value = {sintomas}
            >
                
            
            
            
            </textarea>        
                    
            <button type = "submit" className="u-full-width button-primary">


            Agregar Cita
            </button>
            
            
        </form>        



        </Fragment>

    );
}


Formulario.propTypes = {

    crearCita: PropTypes.func.isRequired



}


 
export default Formulario;