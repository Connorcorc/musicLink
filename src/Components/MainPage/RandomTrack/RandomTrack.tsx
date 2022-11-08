import React from "react";
import "./RandomTrack.css";
import playbutton from "../../../images/playbutton.png";

type RandomTrackProps = {
  id: string;
  image: string;
  artist: string;
  title: string;
  duration: number;
  audio: string;
  setNowPlaying: (data: string) => void;
};

const RandomTrack = ({
  id,
  image,
  artist,
  title,
  duration,
  audio,
  setNowPlaying,
}: RandomTrackProps) => {
  return (
    <div className="track-container">
      <input
        className="playButton"
        type="image"
        src={playbutton}
        onClick={() => setNowPlaying(audio)}
      ></input>
      <p className="track-artist">{artist}</p>
      <p className="track-title">{title}</p>
      <p className="track-duration">{Math.round(((duration / 60) * 100) / 100)} min</p>
    </div>
  );
};

export default RandomTrack;
