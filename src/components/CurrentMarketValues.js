import React, { Component, Fragment } from 'react';
import millify from 'millify';
import logos from './logos';

const CurrentMarketValues = props => {
    const {data} = props;
    return (
        <Fragment>
          <div className="container">
            {data.map((coin, i) => {
                const symbol = coin.symbol;
                const coinVolume = parseFloat(coin['24h_volume_usd']);
                const marketCap = parseFloat(coin.market_cap_usd);
                return (
                    <div key={i} className="container__card">
                        <div className="container__card__header">
                            <div className="container__card__header__img"><img src={logos[symbol]} alt={symbol}/></div>
                            <div className="container__card__header__currency">
                                <h2>{coin.name} ({coin.symbol})</h2>
                                <div>
                                    <h3>${coin.price_usd} USD</h3>
                                    <h4 style={{color: coin.percent_change_1h > 0 ? '#13CE66' : '#FF4949'}}> ({coin.percent_change_1h}%)</h4>
                                </div>
                            </div>
                        </div>
                        <div className="container__card__body">
                            <div>
                                <p>RANK</p>
                                <p>{coin.rank}</p>
                            </div>
                            <div>
                                <p>MARKET CAP</p>
                                <p>${millify(marketCap)}</p>
                            </div>
                            <div>
                                <p>VOLUME (24H)</p>
                                <p>${millify(coinVolume)}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
        </Fragment>
    )
};

export default CurrentMarketValues;
