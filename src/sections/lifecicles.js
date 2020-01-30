import React, { Component } from 'react';


export default class Lifecicles extends Component {
    /* Constructor por defecto
    constructor(...args){ 
        super(...args)
    } */

    constructor(props) {
        super(props); // este metodo llama al constructor de Component
        // inicializamos el state 
        this.state = { mensajeInicial: 'mensaje inicial' }
    }

    // Este metodo cambia el mensaje del state
    handleClick = () => {
        this.setState({mensajeInicial: 'mensaje modificado'})
    }

    render() {
        return (<div className="lifecicles">
                    <h4>Ciclo de montaje: constructor</h4>
                    { this.state.mensajeInicial }
                    <button onClick={ this.handleClick}>
                        Cambiar Mensaje
                    </button>
                </div>
                );
    }
}