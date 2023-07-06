import React, { Component } from 'react';
//import { BrowserRouter, Router, Route } from 'react-router-dom';
import './App.css';
import MyNav from './components/main/MyNav';
import LatestRelease from './components/main/LatestRelease';
import Welcome from './components/main/Welcome';
import MyFooter from './components/main/MyFooter';


class App extends Component {
  state = { query: '' };
  setQuery = (value) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <>

        <MyNav query={this.state.query} setQuery={this.setQuery} />
        <Welcome />
        <LatestRelease query={this.state.query} />
        <MyFooter />

      </>
    );
  }
}

export default App;
