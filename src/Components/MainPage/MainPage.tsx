import React, { useState, useEffect } from "react";
import "./MainPage.css"
import RandomTrack from './RandomTrack/RandomTrack'
import QueueTrack from "./QueueTrack/QueueTrack";
import { JamObject } from '../../types/JamObject'
import AlbumGrid from "./AlbumGrid";
import { useNavigate } from "react-router-dom";

type MainPageProps = {
  randomTracks: JamObject[],
  genre: string,
  setRandomTracks: (data: JamObject[]) => void,
  setGenre: (data: string) => void,
  callTracks: (genre: string) => void
}

export const MainPage = ({randomTracks, genre, setRandomTracks, callTracks}: MainPageProps) => {
  const [queue, setQueue] = useState<JamObject[]>([]);
  const [hasError, setError] = useState<string>("");
  const [nowPlaying, setNowPlaying] = useState<JamObject[]>([]);
  
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
        {tracks}
        </div>
      </main>
    </div>
  )
}
