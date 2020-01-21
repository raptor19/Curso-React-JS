import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json';

// Componente Contador
// aumenta un contador por cada segundo
class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }
  render() {
    return (
      <div>
        <h2>Contador</h2>
        <span>{this.state.contador}</span>
      </div>
    )
  }
}

// Listas simples en React
class Listas extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5]
    return (
      <div>
        <h2>Trabajando con listas</h2>
        {numbers.map((number, index) => {
          return <p key={index}>Soy el numero {number}</p>
        })}
      </div>
    );
  }
}

// Listas de Objetos en react
class ListaDeObjetos extends Component {
  render() {
    return (
      <div>
        <h2>Trabajando con listas de Objetos</h2>
        <ul>
          {cars.map(car => {
            return (
              <CarItem key={car.id} car={car}/>
            )
          })}
        </ul>
      </div>
    );
  }
}

// Componente Item de la lista de Autos

class CarItem extends Component {
  render() {
    const { car } = this.props;
    return (
      <li>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    );
  }
}

// Practica de Eventos en React

class Eventos extends Component {
  
  //inicializo variables para mostrar las coordenadas del mouse
  constructor() {
    super()
    this.state = { mouseX: 0 ,mouseY: 0 }    
  }
  //Este metodo guarda las cordenadas del mouse 
  handleMouseMove = (e) => {
    const { clientX,clientY } = e 
    this.setState({mouseX: clientX,mouseY: clientY})
  }

  render() {
    return(
      <div>
      <h2>Eventos en React</h2>
      <button onClick={()=> alert("Soy un evento!")}>Practicando Eventos!</button>
      <div onMouseMove={this.handleMouseMove}
           style={{border: '1px,solid,#000',marginTop: 10,padding: 10}}>
           <p>{this.state.mouseX},{this.state.mouseY}</p>
      </div>
      </div>
    );
  }
}

// Practica de Eventos Sinteticos

class EventosSinteticos extends Component {
  handleClick (e) {
    console.log(e)
    console.log(e.nativeEvent)
    alert("Eventos Sinteticos")
  }
  
  render () {
    return(
      <div>
        <h2>Eventos Sinteticos</h2>
        <button onClick={this.handleClick}>Eventos Sinteticos</button>
      </div>
    );
  }

}

//Componente Principal
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Vamos a Aprender React!</p>
          <Contador />
          <ConditionalSection />
          <Listas />
          <ListaDeObjetos />
          <Eventos/>
          <EventosSinteticos/>
        </header>
      </div>
    );
  }
}

export default App;
