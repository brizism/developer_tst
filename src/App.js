import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CoinPage from './components/CoinPage';
import './styles/min_css/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/developer_tst' component={Home} />
            <Route exact path='/coin/:id' component={CoinPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
