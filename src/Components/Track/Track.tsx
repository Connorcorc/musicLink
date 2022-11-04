import React from "react"
import './Track.css'

type TrackProps = {
  artist: string, 
  title: string, 
  audio:string
}

const Track = ({ artist, title, audio}: TrackProps) => {
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
