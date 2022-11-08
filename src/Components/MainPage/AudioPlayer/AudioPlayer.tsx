import React, { useEffect, useState, useRef } from "react";
import { JamObject } from "../../../types/JamObject";

type AudioPLayerProps = {
  nowPlaying: string;
};

const AudioPlayer = ({ nowPlaying }: AudioPLayerProps) => {
  const [currentTrack, setCurrentTrack] = useState<string>(nowPlaying);
  const audioRef = useRef();

  let inc: number = 0;

  useEffect(() => {
    setCurrentTrack(nowPlaying);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [nowPlaying]);

  return (
    <audio controls className="media" ref={audioRef}>
      <source src={currentTrack} type="audio/mpeg"></source>
    </audio>
  );
};

export default AudioPlayer;
