import React from "react"
import './RandomTrack.css'

const RandomTrack = ({  artist, title, audio}) => {
  return (
    <div className="player">
      <h3>{artist}</h3>
      <p>{title}</p>
      <video controls className="media">
        <source src={audio} type="audio/mpeg"></source>
      </video>

    </div>
  )
}

export default RandomTrack

