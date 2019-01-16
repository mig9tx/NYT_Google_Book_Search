import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Google Books Search App</h1>
      <Form />
      </div>
    );
  }
}

export default App;
