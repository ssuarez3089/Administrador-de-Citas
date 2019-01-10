import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {

     eliminarCita = () => {
        this.props.borrarCita(this.props.info.id);
    }

    render() { 
        const {fecha, hora, paciente, doctor, sintomas } = this.props.info;
        return ( 
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className=",t-0">{paciente}</h3>
                    <p className="card-text"><span>Nombre del Doctor:</span>{doctor}</p>
                    <p className="card-text"><span>Fecha:</span>{fecha}</p>
                    <p className="card-text"><span>Hora:</span>{hora}</p>
                    <p className="card-text"><span>Sintomas:</span></p>
                    <p className="card-text">{sintomas}</p>

                    <button onClick={ this.eliminarCita } className="btn btn-danger">
                        Borrar &times;
                    </button>

                </div>
            </div>
         );
    }
}

Cita.propTypes = {
    info : PropTypes.shape({
        fecha : PropTypes.string.isRequired,
        hora : PropTypes.string.isRequired,
        paciente : PropTypes.string.isRequired,
        sintomas : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        doctor : PropTypes.string.isRequired
    }),
    borrarCita : PropTypes.func.isRequired
}
 
export default Cita;