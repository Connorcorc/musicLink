import React from "react"
import playButton from '../../../images/playbutton.png'
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
      <input 
        className="playButton"
        type="image"
        src={playButton}
      />
      {/* <button>
        <img className="playButton" src={playButton} alt="play button" />
      </button> */}
      <p className="track-artist">{artist}</p>
      <p className="track-title">{title}</p>
      <p className="track-duration">{Math.round(((duration / 60) * 100) / 100)} min</p>
      {/* <button onClick={() => handleQueue(id)} className='add-to-queue-button display'>add to queue</button> */}
      {/* <video controls className="media">
        <source src={audio} type="audio/mpeg"></source>
      </video> */}
    </div>
  )
}

export default RandomTrack;

