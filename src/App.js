import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage';

import Page404 from './pages/Page404';
import './App.css';


class App extends Component {

  render() {
    return (
      <ParallaxProvider>
        <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='' component={Page404} />
          </Switch>
        </BrowserRouter>
        </div>
      </ParallaxProvider>
    );
  }
}
export default App;