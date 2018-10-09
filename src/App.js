import React, { Component } from 'react';
import Header from '../src/views/components/header/Header';
import Home from '../src/views/components/home/Home';
import Footer from '../src/views/components/footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
