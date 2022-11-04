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


  const handleQueue = (id: string) => {
    addToQueue(id);
  }


  return (
    <div className="track-container">
      <p>{artist}</p>
      <p>{title}</p>
      <p>{duration} sec</p>
      <button onClick={() => handleQueue(id)} className='add-to-queue-button display'>add to queue</button>
      {/* <video controls className="media">
        <source src={audio} type="audio/mpeg"></source>
      </video> */}
    </div>
  )
}

export default RandomTrack;

