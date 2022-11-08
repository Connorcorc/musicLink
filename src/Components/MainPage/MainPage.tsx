import React, { useState, useEffect } from "react";
import "./MainPage.css"
import RandomTrack from './RandomTrack/RandomTrack'
import QueueTrack from "./QueueTrack/QueueTrack";
import { JamObject } from '../../types/JamObject'
import AlbumGrid from "./AlbumGrid";
import { RefreshForm } from "./RefreshForm/RefreshForm";
import { useNavigate } from "react-router-dom";

type MainPageProps = {
  randomTracks: JamObject[],
  genre: string,
  sortBy: string,
  setRandomTracks: (data: JamObject[]) => void,
  setGenre: (data: string) => void,
  setSortBy: (data: string) => void,
  callTracks: (genre: string) => void
}

export const MainPage = ({randomTracks, genre, sortBy, setRandomTracks, setGenre, setSortBy, callTracks}: MainPageProps) => {
  const [queue, setQueue] = useState<JamObject[]>([]);
  const [nowPlaying, setNowPlaying] = useState<JamObject[]>([]);
  const [hasError, setError] = useState<string>('');

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
        <div className="randomSong display">+
          <RefreshForm 
            setGenre={setGenre}
            setSortBy={setSortBy}/>
          {tracks}
        </div>
      </main>
    </div>
  )
}
