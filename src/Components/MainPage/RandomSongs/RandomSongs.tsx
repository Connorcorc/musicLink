import React from "react"
import './RandomSongs.css'

const RandomSongs = ({  id, artist, title, audio, addToQueue}) => {
  return (
    <div className="player">
      <h3>{artist}</h3>
      <p>{title}</p>
      {/* <video controls className="media">
        <source src={audio} type="audio/mpeg"></source>
      </video> */}
      <button className="addQueue" onClick={() => addToQueue(id)}>Add to Queue</button>
    </div>
  )
}

export default RandomSongs

