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
  const [hasError, setError] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('')
  const [genre, setGenre] = useState<string>('')

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

  const updatePlaylist = () => {
    
    //fetch call w new params
  }
      
  const showAlbumGrid = albumCovers.map(albumCover => {
    return (
      <AlbumGrid key={albumCover.id} albumCover={albumCover.image} />
    )
  })

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
          className="player-sort nav"
          onChange={event => setSortBy(event.target.value)} 
          name="sortSelect" 
          id="sort">
            <option value="">Sort by ▼</option>
            <option value="bestOf">Best Of</option>
            <option value="trending">Trending</option>
            <option value="latest">Latest</option>
          </select>

          <select 
          className="player-genre nav"
          onChange={event => setGenre(event.target.value)} 
          name="genre" 
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

          <button className="nav" type="button" onClick={updatePlaylist}>VIBE</button>
          </div>
        {tracks}
        </div>
      </main>
    </div>
  )
}
