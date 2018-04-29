import React, { Component, Fragment } from 'react';
import axios from 'axios';
import millify from 'millify';

class CoinInformation extends Component {
  constructor(props){
    super(props)
  }
  

  render() {
    const {data} = this.props;
    const coinVolume = parseFloat(data['24h_volume_usd']);
    return (
      <Fragment>
        <h1>{data.name}</h1>
        <p>Volume (24h): ${millify(coinVolume)}</p>
        <p>Available Supply: ${millify(parseFloat(data.available_supply))}</p>
        <p>Market Cap: ${millify(parseFloat(data.market_cap_usd))}</p>
        <p>Max Supply: ${millify(parseFloat(data.max_supply))}</p>
        <p>Total Supply: ${millify(parseFloat(data.total_supply))}</p>
        <p>Price  USD: ${millify(parseFloat(data.price_usd))}</p>
      </Fragment>
    )
  }
}

export default CoinInformation;
