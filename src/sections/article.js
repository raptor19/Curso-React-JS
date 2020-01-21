import React , { Component } from 'react';

export default class Article extends Component {
    static propTypes = {
        author: this.PropTypes.string.isRequired
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