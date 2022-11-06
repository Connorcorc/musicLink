import React, { useLayoutEffect, useState, useEffect } from "react";
import "./MainPage.css"
import RandomTrack from './RandomTrack/RandomTrack'
import QueueTrack from "./QueueTrack/QueueTrack";
import { JamObject } from '../../types/JamObject'
import BGvertical from '../../images/BGvertical.jpg'
import AlbumGrid from "./AlbumGrid";
import { useNavigate } from "react-router-dom";

type MainPageProps = {
  randomTracks: JamObject[],
  setRandomTracks: (data: JamObject[]) => void
}

export const MainPage = ({randomTracks, setRandomTracks}: MainPageProps) => {
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

  const refreshRandomList = async (genre: string) => {
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=3c243fb0&format=jsonpretty&limit=10&fuzzytags=${genre}&include=musicinfo&groupby=artist_id`
    setError("");

    try {
      const response = await fetch(url)
      const data = await response.json()
      setRandomTracks(data.results)
    } catch(error: any) {
      setError(error.message)
    }
  }

  console.log("Random Tracks in MainPage",tracks)
  console.log("our Queue****", queue);
  console.log("QUEUEDUP****", queuedUp);
  
  useEffect(() => {
    if (!randomTracks.length) {
      navigate("/")
    }
  }, [navigate, randomTracks.length])

  return(
    <main className="mainPage" >
      <div className="player display">
        {queuedUp}
      </div>
      <div className="randomSong display">
      {tracks}
      </div>
      <div className="album-grid">
      {showAlbumGrid}
      </div>
    </main>
  )
}
