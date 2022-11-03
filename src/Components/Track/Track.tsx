import React from "react"
import './Track.css'

const Track = ({  artist, title, audio}) => {
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

export default Track
