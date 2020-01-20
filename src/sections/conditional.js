import React , { Component } from 'react';

class LoginButton extends Component {
    render(){
        return <button>Iniciar Sesion</button>
    }
}

class LogoutButton extends Component {
    render(){
        return (
            <div>
                <p>Bienvenido Usuario</p>
                <button>Cerrar Sesion</button>
            </div>
        )
    }
}


//Componente practica de Conditional rendering

export default class ConditionalSection extends Component {

    constructor(){
        super()
        this.state = { mostrarA: false}
    }

    render(){
        return (
            <div>
                <h4>Conditional rendering</h4>
                { this.state.mostrarA ? <LoginButton/> : <LogoutButton/>}
            </div>
        )
    }
}