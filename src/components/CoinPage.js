import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CoinChart from './CoinChart';
import BTC_Data from '../data/BTCData';

class CoinPage extends Component {
  
    state = {
      coinApiData: false,
      coinSymbol: false,
      chartData: false
    }
  

  componentDidMount(){
    let coinName = this.props.match.params.id;
    !this.state.coinApiData ? this.fetchcoinApiData(coinName) : null;
  }

  fetchcoinApiData = (coinName) => {
    let url = `https://api.coinmarketcap.com/v1/ticker/${coinName}/?convert=USD`;

    axios.get(url)
      .then(res => this.setState({
        coinApiData: res.data[0],
        coinSymbol: res.data[0].symbol
      }))
    .then(() => {
      this.fetchChartData(this.state.coinSymbol)
      setTimeout(() => this.fetchcoinApiData, 300000);
    }).catch(err => console.log(err))
  }

  fetchChartData = (coinSymbol) => {
    switch (coinSymbol) {
      case 'BTC':
        return this.setState({
          chartData: BTC_Data
        })
      default:
        break;
    }
  }
  render() {
    console.log(this.state.coinApiData);
    const {coinApiData, chartData} = this.state;
    return (
      <Fragment>
        <CoinChart data={chartData} />
      </Fragment>
    );
  }
}

export default CoinPage;
