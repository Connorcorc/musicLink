import React from "react"
import './RandomTrack.css'

type RandomTrackProps = {
  id: string, 
  artist: string, 
  title: string, 
  duration: number, 
  audio: string,
  addToQueue: (id: string) => void
}

const RandomTrack = ({  id, artist, title, duration, audio, addToQueue}: RandomTrackProps) => {


  const handleQueue = (id: string, event) => {
    addToQueue(id);
    event.disabled = true;
  }


  return (
    <div className="track-container">
      <h3>{artist}</h3>
      <p>{title}</p>
      <p>{duration} sec</p>
      <button onClick={event => handleQueue(id, event)}>add to queue</button>
      {/* <video controls className="media">
        <source src={audio} type="audio/mpeg"></source>
      </video> */}
    </div>
  )
}

export default RandomTrack;

