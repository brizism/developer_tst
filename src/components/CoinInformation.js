import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import millify from 'millify';

class CoinInformation extends Component {
  render() {
    const {data} = this.props;
    const coinVolume = parseFloat(data['24h_volume_usd']);
    return (
      <div className="coin">
        <Link className="back-link" to={'/'}>Go back</Link>
        <span>{data.name}</span>
        <div className="coin__info coin__info--one">
          <div className="coin__info__first">
            <div className="coin__info__first__top">${millify(coinVolume)}</div>
            <div className="coin__info__first__bottom">Volume (24h)</div>
          </div>
          <div className="coin__info__first">
            <div className="coin__info__first__top">${millify(parseFloat(data.available_supply))}</div>
            <div className="coin__info__first__bottom">Available Supply</div>
          </div>
          <div className="coin__info__first">
            <div className="coin__info__first__top">${millify(parseFloat(data.market_cap_usd))}</div>
            <div className="coin__info__first__bottom">Market Cap</div>
          </div>
        </div>
        <div className="coin__info coin__info--two">
          <div className="coin__info__second">
            <div className="coin__info__first__top">${millify(parseFloat(data.max_supply))}</div>
            <div className="coin__info__first__bottom">Max Supply</div>
          </div>
          <div className="coin__info__second">
            <div className="coin__info__first__top">${millify(parseFloat(data.total_supply))}</div>
            <div className="coin__info__first__bottom">Total Supply</div>
          </div>
          <div className="coin__info__second">
            <div className="coin__info__first__top">${millify(parseFloat(data.price_usd))}</div>
            <div className="coin__info__first__bottom">Price  USD</div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinInformation;
