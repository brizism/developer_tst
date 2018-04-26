import React, { Component } from 'react';
import axios from 'axios';
import CurrentMarketValues from './CurrentMarketValues';

class Home extends Component {
  state = {
    topFiveCoins: false,
    topFiveCoinsLoaded: false
  }

  componentDidMount(){
    !this.state.topFiveCoins ? this.fetchTopFiveCoins() : null
  }



  fetchTopFiveCoins = () => {
    let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=5';
    axios.get(url)
      .then(res => this.setState({
        topFiveCoins: res.data,
        topFiveCoinsLoaded: true
      }))
      .then(() => {
        setTimeout(this.fetchTopFiveCoins, 300000);
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
      
      </div>
    )
  }
  
}

export default Home;
