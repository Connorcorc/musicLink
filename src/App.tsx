import React, {Component} from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Components/MainPage/MainPage';
import jam from './images/raspberry-jam.jpg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      musicGenre: '',
      randomTracks: []
    }
  }

  setGenre = (genre: string) => {
    this.setState({musicGenre: genre})
  }

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${jam})`, backgroundSize: "cover" }} >
        <Routes>
          <Route path='/' element={<LandingPage setGenre={this.setGenre}/>}/>
          <Route path='/main' element={<MainPage musicGenre={this.state.musicGenre} randomTracks={this.state.randomTracks}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
