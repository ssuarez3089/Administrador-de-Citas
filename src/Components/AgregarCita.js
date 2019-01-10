import React, { Component } from 'react';
import uuid from 'uuid';

class AgregarCita extends Component {

    //refs

    nombrePacienteRef = React.createRef();
    nombreDoctorRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();
    


    state = { 
        error: false
     }

    crearNuevaCita = e => {
        e.preventDefault();

        const paciente = this.nombrePacienteRef.current.value,
              doctor = this.nombreDoctorRef.current.value,
              fecha = this.fechaRef.current.value,
              hora = this.horaRef.current.value,
              sintomas = this.sintomasRef.current.value;

              if(paciente === '' || doctor === '' || fecha === '' || hora === '' || sintomas === '') {
                  this.setState({
                      error: true
                  })
              } else {
                const nuevaCita = {
                    id: uuid(),
                    paciente,
                    doctor,
                    fecha,
                    hora,
                    sintomas
                }
                //se envia el objeto al padre para reiniciar el state
                this.props.crearCita(nuevaCita); 
                
                //reiniciar el formulario
                e.currentTarget.reset()

                //elimine el error

                this.setState({
                    error: false
                })
            }
              }

        

    render() { 

        const existeError = this.state.error;

        return ( 
            <div className="card mt-5">
                <div className="card-body">
                <h2 className="card-title text-center mb-5"> Agregar Cita </h2>
                <form onSubmit={this.crearNuevaCita}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Paciente</label>
                    <div className="col-sm-8 col-lg-10">
                        <input ref={this.nombrePacienteRef} type="text" className="form-control" placeholder="Nombre Paciente" />
                    </div>
                    </div>
                    <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Doctor</label>
                    <div className="col-sm-8 col-lg-10">
                    <input ref={this.nombreDoctorRef} type="text" className="form-control"  placeholder="Nombre Doctor" />
                    </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input ref={this.fechaRef} type="date" className="form-control" />
                    </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                    <input ref={this.horaRef} type="time" className="form-control" />
                    </div>
                    </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                    <div className="col-sm-8 col-lg-10">
                        <textarea ref={this.sintomasRef} className="form-control"></textarea>
                    </div>
                    </div>
                    <div className="form-group row justify-content-end">
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100">Agregar</button>
                    </div>
                </div>
            </form>
                { existeError ? <div className="alert alert-danger text-center">Todos los Campos son Obligatorios</div> : ''}

                </div>
            </div>
         );
    }
}
 
export default AgregarCita;