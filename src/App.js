import React, { Component } from 'react';
import './App.css';
import Counter from './container/Counter';
import LoginForm from './container/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Counter /> */}
          <LoginForm/>

      </div>
    );
  }
}

export default App;
