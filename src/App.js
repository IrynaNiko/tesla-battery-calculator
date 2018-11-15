import React, { Component } from 'react';
import Header from './components/Header/Header';
import Car from './components/Car/Car';
import Battery from './containers/Battery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Battery />
      </div>
    );
  }
}

export default App;