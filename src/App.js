import React, {Component} from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
