import React, { useState } from "react";
import "./MainPage.css"
import RandomTrack from './RandomTrack/RandomTrack'
import {JamObject, JamObject as randomTrack} from '../../types/JamObject'

type MainPageProps = {
  randomTracks: randomTrack[],
}

export const MainPage = ({randomTracks}: MainPageProps) => {
  const [queue, setQueue] = useState<JamObject[]>([])
  
    const addToQueue = (id: string) => {
      const trackToQueue = randomTracks.find(track => track.id === id);
      setQueue([...queue, trackToQueue]);
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
        /> )

    })

    console.log("Random Tracks in MainPage",tracks)
    console.log("our Queue****", queue);
    return(

      <main className="mainPage">
        <div className="player">
          
        </div>
        <div className="randomSong">
        {tracks}
        </div>
      </main>
    )
  
}
