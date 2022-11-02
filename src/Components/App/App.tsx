import React, {Component} from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';
import { JamObject } from '../../types/jamObject';
import { fetchTracks } from '../../api-calls';

type AppState = {
  musicGenre: string;
  randomTracks: JamObject[]
}

class App extends Component<AppState> {
  state: AppState = {
    musicGenre: '',
    randomTracks: []
  }


  setGenre = (genre: string) => {
    this.setState({musicGenre: genre})
  }

  addTracks = (data: {}[]) => {
    console.log("HERE====", data)
    this.setState({randomTracks: data})
  }

  render() {
    return (
      <div className="App" >
        <Routes>
          <Route path='/' element={<LandingPage setGenre={this.setGenre} addTracks={this.addTracks}/>}/>
          <Route path='/main' element={<MainPage randomTracks={this.state.randomTracks}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
