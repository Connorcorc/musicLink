import React from "react"
import './RandomSongs.css'

const RandomSongs = ({  artist, title, audio}) => {
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

export default RandomSongs

