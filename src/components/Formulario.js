import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Fomrulario = ({crearCita}) => {
  // crear el state para las citas
  const [cita,actualizarCita] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  // crear un state para los errores
  const [error,actualizarError] = useState(false);

  // actualizar el state cita
  const actualizarState = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    actualizarCita({
      ...cita,
      [key]: value
    })
  } 

  // extraer valores de la cita
  const {mascota,dueño,fecha,hora,sintomas} = cita;

  // enviar la cita
  const enviarCita = (e) => {
    e.preventDefault();
    // validar 
    if(mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
      console.log("hay un error");
      actualizarError(true);
      return;
    }
    // agregar un ID
    const id = uuidv4();
    cita.id = id;
    // agregar cita al state principal
    crearCita(cita);
    // reiniciando el formulario
    actualizarCita({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return ( 
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? <p className="alerta-error">Todos los campos son obligatorios </p> : null}
      <form onSubmit={enviarCita}>
        <label htmlFor="mascota">Nombre Mascota</label>
        <input 
          type="text" 
          id="mascota"
          name="mascota"
          placeholder="Nombre Mascota"
          className="u-full-width"
          onChange={actualizarState}
          value={mascota}
        />

        <label htmlFor="dueño">Nombre Dueño</label>
        <input 
          type="text" 
          id="dueño"
          name="dueño"
          placeholder="Nombre Dueño"
          className="u-full-width"
          onChange={actualizarState}
          value={dueño}
        />

        <label htmlFor="fecha">Fecha</label>
        <input 
          type="date" 
          id="fecha"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label htmlFor="hora">Hora</label>
        <input 
          type="time" 
          id="hora"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label htmlFor="sintomas">Sintomas</label>
        <textarea 
          type="text" 
          id="sintomas"
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
}

Fomrulario.protoTypes = {
  crearCita: PropTypes.func.isRequired
}
export default Fomrulario;