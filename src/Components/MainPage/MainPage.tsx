import React, { useState, useEffect } from "react";
import "./MainPage.css";
import RandomTrack from "./RandomTrack/RandomTrack";
import { JamObject } from "../../types/JamObject";
import AlbumGrid from "./AlbumGrid";
import { RefreshForm } from "./RefreshForm/RefreshForm";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "./AudioPlayer/AudioPlayer";

type MainPageProps = {
  randomTracks: JamObject[];
  setGenre: (data: string) => void;
};

export const MainPage = ({ randomTracks, setGenre }: MainPageProps) => {
  const [nowPlaying, setNowPlaying] = useState<string>("");

  const navigate = useNavigate();
  const albumCovers: { image: string; id: string }[] = [];

  const tracks = randomTracks.map((randomTrack) => {
    albumCovers.push({ image: randomTrack.image, id: randomTrack.id });
    return (
      <RandomTrack
        id={randomTrack.id}
        key={randomTrack.id}
        image={randomTrack.image}
        artist={randomTrack.artist_name}
        title={randomTrack.name}
        duration={randomTrack.duration}
        audio={randomTrack.audio}
        setNowPlaying={setNowPlaying}
      />
    );
  });

  const showAlbumGrid = albumCovers.map((albumCover) => {
    return <AlbumGrid key={albumCover.id} albumCover={albumCover.image} />;
  });

  useEffect(() => {
    if (!randomTracks.length) {
      navigate("/");
      setNowPlaying(randomTracks[0].audio);
    }
  }, [navigate, randomTracks.length]);

  return (
    <div>
      <main className="mainPage">
        <div className="album-grid">{showAlbumGrid}</div>
        <AudioPlayer nowPlaying={nowPlaying} />
        <RefreshForm setGenre={setGenre} />
        <div className="randomSong-display">{tracks}</div>
      </main>
    </div>
  );
};
