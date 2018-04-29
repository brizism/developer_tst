import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CoinPage from './components/CoinPage';
import './styles/min_css/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/coin/:id' component={CoinPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
