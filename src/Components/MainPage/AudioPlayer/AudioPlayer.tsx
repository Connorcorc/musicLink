import React, { useEffect, useState } from "react";
import { JamObject } from "../../../types/JamObject";

type AupdioPLayerProps = {
  randomTracks: JamObject[]
}

const AudioPlayer = ({randomTracks}:AupdioPLayerProps) => {
  const [currentTrack, setCurrentTrack] = useState<string>()

  let inc: number = 0

  useEffect(() => {
    setCurrentTrack(randomTracks[inc].audio)
  })

  const refreshCurrentTrack = ():void =>  {
    inc ++
    setCurrentTrack(randomTracks[inc].audio)
  }

  return (
    <audio controls className="media" autoPlay>
      <source src={currentTrack} type="audio/mpeg" onEnded={refreshCurrentTrack}></source>
    </audio>
  )
}

export default AudioPlayer