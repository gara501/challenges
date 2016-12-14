import React, { Component } from 'react';
import logo from './logo.svg';
import './components/grid.css';
import './components/header.css';
import './components/intro.css';
import './App.css';
import Header from './components/header.js';
import Intro from './components/intro.js';
import Grid from './components/grid.js';
import {Button} from 'react-bootstrap';

class App extends Component {
  render() {
    const buttonsInstance = (
      <Button>Click ME!</Button>
    );
    return (
      <div className="App">
        <Header></Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Intro></Intro>
              <Grid></Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
