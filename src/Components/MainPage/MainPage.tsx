import React, { useState } from "react";
import "./MainPage.css"
import RandomTrack from './RandomTrack/RandomTrack'
import QueueTrack from "./QueueTrack/QueueTrack";
import { JamObject } from '../../types/JamObject'

type MainPageProps = {
  randomTracks: JamObject[],
}

export const MainPage = ({randomTracks}: MainPageProps) => {
  const [queue, setQueue] = useState<JamObject[]>([])
  
    const addToQueue = (id: string) => {
      const trackToQueue = randomTracks.find(track => track.id === id);
      setQueue([...queue, trackToQueue!]);
    }

    const tracks = randomTracks.map(randomTrack => {
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
      <main className="mainPage">
        <div className="player">
          {queuedUp}
        </div>
        <div className="randomSong">
        {tracks}
        </div>
      </main>
    )
  
}
