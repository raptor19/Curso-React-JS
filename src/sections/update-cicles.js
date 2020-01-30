import React , { Component } from 'react'
import PropTypes from 'prop-types'

// Este es un objeto con tres item correspondientes a tres animales y las url de sus imagenes
// eslint-disable-next-line no-unused-vars
const ANIMAL_IMAGES = {
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://img-cdn.hipertextual.com/files/2019/07/hipertextual-delfines-regulan-cada-latido-corazon-mientras-bucean-2019939498.jpeg?strip=all&lossy=1&quality=55&resize=740%2C490&ssl=1',
    panda:'https://goo.gl/oNbtoq'
    
}


class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextProps) {
        console.log('componentsWillReceiveProps')
        console.log(nextProps)
        // Actualizo el state por cada cambio en la props de animal
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})
    }

    render(){
        console.log('render =>')
        return(
            <div>
                <p>Animal Seleccionado {this.props.animal}</p>
                <img 
                alt={ this.props.animal }
                src={ this.state.src} 
                width='250'/>
            </div>
        );
    }
}

// Añado las propTypes que tiene el componente AnimalImage
// eslint-disable-next-line react/no-typos
AnimalImage.PropTypes = {
    animal: PropTypes.oneOf(Object.keys(ANIMAL_IMAGES))
}
// defino la props por defecto
/**AnimalImage.defaultProps = {
    animal: 'panda'
}**/

class UpdateCicles extends Component {
    state = { animal: 'dolphin' }
    _renderAnimalButton = (animal) =>{
        return(
            <button 
            disabled={ animal === this.state.animal }
            key={animal} 
            onClick={() => this.setState({ animal })}>
                {animal}
            </button>
        );
    }
    render() {
        return(
            <div>
                <h4>Ejemplo de ciclo de Actualizacion</h4>
                {Object.keys(ANIMAL_IMAGES).map(this._renderAnimalButton)}
                
                <AnimalImage animal={ this.state.animal }/>
            </div>
        );
    }
}

export default UpdateCicles