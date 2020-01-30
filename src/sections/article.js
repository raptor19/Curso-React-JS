import React , { Component } from 'react';
//import PropTypes from 'prop-types';

export default class Article extends Component {
 
    constructor(props) {
        super(props)
        if (typeof props.author === undefined) {
            console.warn("autor requerido!")
        }
    }

    render() {
        const { author,children,date,title } = this.props
        return(
            <section>
                <h2>{title}</h2>
                <p><em>Escrito por :{author}</em></p>
                <p>Fecha: {date}</p>
                <article>
                    {children}
                </article>
            </section>
        );
    }
}