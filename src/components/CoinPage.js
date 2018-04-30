import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CoinInformation from './CoinInformation';
import CoinChart from './CoinChart';
import BTC_Data from '../data/BTCData';
import ETH_Data from '../data/ETHData';
import XRP_Data from '../data/XRPData';
import BCH_Data from '../data/BCHData';
import EOS_Data from '../data/EOSData';

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
      break;
      case 'ETH':
        return this.setState({
          chartData: ETH_Data
        })
      break;
      case 'XRP':
        return this.setState({
          chartData: XRP_Data
        })
      break;
      case 'BCH':
        return this.setState({
          chartData: BCH_Data
        })
      break;
      case 'EOS':
        return this.setState({
          chartData: EOS_Data
        })
      break;
      default:
        break;
    }
  }
  render() {
    console.log(this.state.chartData);
    const {coinApiData, chartData} = this.state;
    return (
      <Fragment>
        <CoinInformation data={coinApiData} />
        <CoinChart data={chartData} />
      </Fragment>
    );
  }
}

export default CoinPage;
