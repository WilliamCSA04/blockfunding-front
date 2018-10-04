import React, { Component } from 'react';
import Header from '../src/views/components/Header';
import Home from '../src/views/components/home/Home';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
