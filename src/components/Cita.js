import React from 'react';
import PropTypes from 'prop-types';
const Cita = ({cita,eliminarCita}) => {
  return (  
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sntomas: <span>{cita.sintomas}</span></p>
      <button
        type="button"
        className="u-full-width button eliminar"
        onClick={() => eliminarCita(cita.id)}
      >Eliminar &times; </button>
    </div>
  );
}

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;
