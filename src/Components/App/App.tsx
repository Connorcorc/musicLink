import React, {useState} from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';
import { JamObject } from '../../types/JamObject';
import { fetchTracks } from '../../api-calls';

const App = () => {
  const [randomTracks, setRandomTracks] = useState<JamObject[]>([])
  const navigate = useNavigate();

  const callTracks = (genre: string) => {
    fetchTracks(genre)
    .then(data => {
      console.log(data.results);
      setRandomTracks(data.results);
      navigate("/main");
    })
    .catch(err => console.log(err))
  }

  console.log("Random Tracks in App====",randomTracks)
  
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={
          <LandingPage callTracks={callTracks}/>
        }/>
        <Route path='/main' element={
          <MainPage 
            randomTracks={randomTracks} 
            setRandomTracks={setRandomTracks}
            callTracks={callTracks}
          />
        }/>
      </Routes>
    </div>
  );
}

export default App;
