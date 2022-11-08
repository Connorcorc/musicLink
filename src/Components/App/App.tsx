import React, {useEffect, useState} from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MainPage } from '../MainPage/MainPage';
import { JamObject } from '../../types/JamObject';
import { fetchTracks } from '../../api-calls';

const App = () => {
  const [randomTracks, setRandomTracks] = useState<JamObject[]>([])
  // hooks for controlled form - let's user's sort through music by:
  //Relevance, Genre, Country
  const [genre, setGenre] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>('')
  const navigate = useNavigate();

  const callTracks = (genre: string) => {
    fetchTracks(genre)
    .then(data => {
      console.log(data.results);
      setRandomTracks(data.results);
      navigate("/main");
    })
    .catch(err => 
      //navigate to error page (setup the conditional to render <div>)
      console.log(err))
  }

  useEffect(() => {
    if(genre.length){
      callTracks(genre)
    }
  }, [genre])
  
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={
          <LandingPage 
            callTracks={callTracks}
            genre={genre}
            setGenre={setGenre}/>
        }/>
        <Route path='/main' element={
          <MainPage 
            randomTracks={randomTracks} 
            genre={genre}
            sortBy={sortBy}
            setRandomTracks={setRandomTracks}
            setGenre={setGenre}
            setSortBy={setSortBy}
            callTracks={callTracks}
          />
        }/>
      </Routes>
    </div>
  );
}

export default App;
