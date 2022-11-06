import React, {useState} from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';
import { JamObject } from '../../types/JamObject';
// import { fetchTracks } from '../../api-calls';

const App = () => {
  const [musicGenre, setMusicGenre] = useState<string>('')
  const [randomTracks, setRandomTracks] = useState<JamObject[]>([])
  const navigate = useNavigate();

  const setGenre = (genre: string) => {
    setMusicGenre(genre)
  }

  const addTracks = (data: JamObject[]) => {
    console.log("HERE====", data);
    setRandomTracks(data);
    navigate("/main");
  }

  console.log("Random Tracks in App====",randomTracks)
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<LandingPage setGenre={setGenre} addTracks={addTracks}/>}/>
        {/* {randomTracks.length > 0  && <Route path='/main' element={<MainPage randomTracks={randomTracks}/>}/>} */}
        <Route path='/main' element={<MainPage randomTracks={randomTracks} setRandomTracks={setRandomTracks}/>}/>
      </Routes>
    </div>
  );
}

export default App;
