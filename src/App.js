import React, {Component} from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Components/MainPage/MainPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      musicGenre: '',
      randomTracks: []
    }
  }

  setGenre = (genre) => {
    this.setState({musicGenre: genre})
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage setGenre={this.setGenre}/>}/>
          <Route path='/main' element={<MainPage musicGenre={this.state.musicGenre} randomTracks={this.state.randomTracks}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
