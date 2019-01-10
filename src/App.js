import React, { Component } from 'react';
import Header from './Components/Header'
import AgregarCita from './Components/AgregarCita'
import ListaCitas from './Components/listaCitas';
import PropTypes from 'prop-types';

class App extends Component {

  state ={
    citas: []
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

creacrCita = (nuevaCita) => {
  //console.log(cita);
  
  const citas = [...this.state.citas, nuevaCita];

  console.log(citas);

  this.setState({
    citas
  });

}

borrarCita = id => {
  console.log(id);
  //obtener copia del state 

  const citasActuales = [...this.state.citas];
  
  // borrar el elelmento del state

  const citas = citasActuales.filter(cita => cita.id !== id);

  //actualizar el state
  this.setState({
    citas
  })
}

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de Pacientes" />
        <div className="row">
          <div className="col-md-6">
              <AgregarCita 
              crearCita={this.creacrCita}
              />
          </div>
          <div className="col-md-6">
            <ListaCitas 
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

AgregarCita.prototypes = {
  creacrCita : PropTypes.func.isRequired
}

export default App;
