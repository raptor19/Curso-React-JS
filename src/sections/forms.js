import React, { Component } from 'react';


export default class Forms extends Component {

    constructor() {
        super()
        this.state = {
            inputName: '',
            inputEmail: '@',
            inputTerms: false
        }
    }

    // Metodo que guarda los datos ingresados en el formulario en variables y las muestra por consola
    handleClickForm = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    // Metodo que muestra el estado de un evento del CheckBox del Formulario
    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({ inputTerms: e.target.checked })
    }

    render() {
        return (
            <div>
                <h4>Formularios en React</h4>
                <form onSubmit={this.handleClickForm}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input type="text"
                            id="name"
                            name="userName"
                            onChange={ e => this.setState({ inputName: e.target.value })}
                            placeholder="introduce tu nombre"
                            ref={inputElement => this.inputName = inputElement} 
                            value={this.state.inputName} />
                    </p>

                    <p>
                        <label htmlFor='email'>Email: </label>
                        <input type="email"
                            id="email"
                            name="userEmail"
                            onChange={ e => this.setState({ inputEmail: e.target.value })}
                            placeholder="introduce tu email"
                            ref={inputElement => this.inputEmail = inputElement }
                            value={this.state.inputEmail} />
                    </p>

                    <p>
                        <label htmlFor="">
                            <input onChange={this.handleChange} type="checkbox" 
                            ref={inputElement => this.inputCheck = inputElement }
                            checked={this.state.inputTerms}/>
                            Aceptar Terminos
                    </label>
                    </p>

                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}