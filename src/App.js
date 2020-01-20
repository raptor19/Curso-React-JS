import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './sections/conditional';

// Componente Contador
// aumenta un contador por cada segundo
class Contador extends Component {
   constructor(){
     super();
     this.state = { contador: 1 }
     setInterval(() =>{
       this.setState({ contador: this.state.contador + 1 })
     },1000)
}
  render () {
    return <span>{this.state.contador}</span>
  }
}

//Componente Principal
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Vamos a Aprender React!</p>
          <Contador/>
          <ConditionalSection/>
        </header>
      </div>
    );
  }
}

export default App;
