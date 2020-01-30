import React , { Component } from 'react';

export default class FetchExample extends Component {
    state = { bpi:{}}
    
    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then( res => res.json())
        .then( data => {
            const { bpi } = data
            this.setState = ({ bpi })
        })
    }
    
    _renderCurrencies() {
        console.log(this.state.bpi)
        const { bpi } = this.state
        return Object.keys(bpi) // ["EUR","GBR","USD"]
        .map( currency => {
            return(
                <div key={currency}>
                    1 BTC es {bpi[currency].rate}
                    <span>{ currency }</span>
                </div>
            )
        })
    }
    render() {
        return(
            <div>
                <h2>Ejemplo API Fetch</h2>
                { this._renderCurrencies() }
            </div>
        );
    }
}