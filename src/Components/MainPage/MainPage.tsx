import React, { useLayoutEffect, useState } from "react";
import "./MainPage.css"
import RandomTrack from './RandomTrack/RandomTrack'
import QueueTrack from "./QueueTrack/QueueTrack";
import { JamObject } from '../../types/JamObject'
import BGvertical from '../../images/BGvertical.jpg'
import AlbumGrid from "./AlbumGrid";

type MainPageProps = {
  randomTracks: JamObject[],
}

export const MainPage = ({randomTracks}: MainPageProps) => {
  const [queue, setQueue] = useState<JamObject[]>([])
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

  console.log("Random Tracks in MainPage",tracks)
  console.log("our Queue****", queue);
  console.log("QUEUEDUP****", queuedUp);
  return(
    <div>
      <main className="mainPage" >
        <div className="album-grid">
        {showAlbumGrid}
        </div>
        <div className="player display">
          <video controls className="media">
            <source src={randomTracks[0].audio} type="audio/mpeg"></source>
          </video>
          {queuedUp}
        </div>
        <div className="randomSong display">
        {tracks}
        </div>
      </main>
    </div>
  )
}
