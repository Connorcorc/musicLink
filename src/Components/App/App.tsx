import React, {useState} from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';
import { JamObject } from '../../types/JamObject';
// import { fetchTracks } from '../../api-calls';

const App = () => {
  const [musicGenre, setMusicGenre] = useState<string>('')
  const [randomTracks, setRandomTracks] = useState<JamObject[]>([])

  const setGenre = (genre: string) => {
    setMusicGenre(genre)
  }

  const addTracks = (data: JamObject[]) => {
    console.log("HERE====", data)
    setRandomTracks(data)
  }

  console.log("Random Tracks in App====",randomTracks)
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<LandingPage setGenre={setGenre} addTracks={addTracks}/>}/>
        {randomTracks.length > 0 && <Route path='/main' element={<MainPage randomTracks={randomTracks}/>}/>}
      </Routes>
    </div>
  );
}

export default App;
