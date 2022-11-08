import React, { useState, useEffect } from "react";
import "./MainPage.css"
import RandomTrack from './RandomTrack/RandomTrack'
import QueueTrack from "./QueueTrack/QueueTrack";
import { JamObject } from '../../types/JamObject'
import AlbumGrid from "./AlbumGrid";
import { useNavigate } from "react-router-dom";

type MainPageProps = {
  randomTracks: JamObject[],
  setRandomTracks: (data: JamObject[]) => void
  callTracks: (genre: string) => void
}

export const MainPage = ({randomTracks, setRandomTracks, callTracks}: MainPageProps) => {
  const [queue, setQueue] = useState<JamObject[]>([]);
  const [hasError, setError] = useState<string>("");
  const navigate = useNavigate();
  const albumCovers: {image: string, id: string}[] = []
  
  const addToQueue = (id: string) => {
    const trackToQueue = randomTracks.find(track => track.id === id);
    setQueue([...queue, trackToQueue!]);
  }

  
  const tracks = randomTracks.map(randomTrack => {
    albumCovers.push({image: randomTrack.image, id: randomTrack.id})
    return (
      <RandomTrack 
        id={randomTrack.id} 
        key={randomTrack.id} 
        artist={randomTrack.artist_name} 
        title={randomTrack.name}
        duration={randomTrack.duration} 
        audio={randomTrack.audio} 
        addToQueue={addToQueue}
      /> 
    )
  })
    
  console.log(albumCovers);
  
  const showAlbumGrid = albumCovers.map(albumCover => {
    return (
      <AlbumGrid key={albumCover.id} albumCover={albumCover.image} />
    )
  })

  const queuedUp = queue.map(track => {
    return (
      <QueueTrack
        id={track.id}
        key={track.id}
        artist={track.artist_name} 
        title={track.name}
        duration={track.duration} 
        audio={track.audio} 
      />
    )
  })

  // const refreshRandomList = async (genre: string) => {
  //   const url = `https://api.jamendo.com/v3.0/tracks/?client_id=3c243fb0&format=jsonpretty&limit=50&fuzzytags=${genre}&include=musicinfo&groupby=artist_id`
  //   setError("");

  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setRandomTracks(data.results)
  //   } catch(error: any) {
  //     setError(error.message)
  //   }
  // }
  
  useEffect(() => {
    if (!randomTracks.length) {
      navigate("/")
    }
  }, [navigate, randomTracks.length])

  return(
    <div>
      <main className="mainPage" >
        <div className="album-grid">
          {showAlbumGrid}
        </div>
        <video controls className="media">
            <source src={randomTracks[0].audio} type="audio/mpeg"></source>
          </video>
        <div className="randomSong display">
          <div className="playist-options">
          <label htmlFor="genres" className="hidden">Choose a genre:</label>
        <select 
          className="player-sort-selector"
          // onChange={handleChange} 
          name="sortSelect" 
          id="sort">
            <option value="">Sort by ▼</option>
            <option value="bestOf">Best Of</option>
            <option value="trending">Trending</option>
            <option value="latest">Latests</option>
          </select>
          <select 
          className="player-genre-selector"
          // onChange={handleChange} 
          name="genreSelect" 
          id="genres">
            <option value="">Choose a genre ▼</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="electronic">Electronic</option>
            <option value="hiphop">HipHop</option>
            <option value="jazz">Jazz</option>
            <option value="indie">Indie</option>
            <option value="filmscore">FilmScore</option>
            <option value="classical">Classical</option>
            <option value="chillout">Chillout</option>
            <option value="ambient">Ambient</option>
            <option value="folk">Folk</option>
            <option value="metal">Metal</option>
            <option value="latin">Latin</option>
            <option value="rnb">RNB</option>
            <option value="reggae">Reggae</option>
            <option value="punk">Punk</option>
            <option value="country">Country</option>
            <option value="house">House</option>
            <option value="blues">Blues</option>
          </select>

          <select 
          className="player-country-selector"
          // onChange={handleChange} 
          name="countrySelect" 
          id="genres">
            <option value="">Choose Country Of Origin ▼</option>
            <option value="brazil">Brazil</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="italy">Italy</option>
            <option value="poland">Poland</option>
            <option value="russia">Russia</option>
            <option value="spain">Spain</option>
            <option value="ukraine">Ukraine</option>
            <option value="united-kingdom">UK</option>
            <option value="united-states-of-america">USA</option>
          </select>

          </div>
        {tracks}
        </div>
      </main>
    </div>
  )
}
