import React from "react"
import './RandomTrack.css'

const RandomTrack = ({  id, artist, title, audio}: {id: string, artist: string, title: string, audio: string}) => {
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

