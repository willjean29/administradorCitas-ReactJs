import React, {Fragment,useState,useEffect} from 'react';

// componentes
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {

  // citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  // arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // funcion para crear la cita
  const crearCita = (cita) => {
    // actualiza el state de citas
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // funcion para eliminar citaID
  const eliminarCita = (id) => {
    const citasActuales = citas.filter((cita) => cita.id !== id );
    guardarCitas([
      ...citasActuales
    ]);
  }

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  },[citas,citasIniciales])

  // condicional para el listado de citas
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas'
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
