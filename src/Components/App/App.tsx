import React, { useEffect, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import { JamObject } from "../../types/JamObject";
import { fetchTracks } from "../../api-calls";

const App = () => {
  const [randomTracks, setRandomTracks] = useState<JamObject[]>([]);
  const [genre, setGenre] = useState<string>("");
  const navigate = useNavigate();

  const callTracks = (genre: string) => {
    fetchTracks(genre)
      .then((data) => {
        console.log(data.results);
        setRandomTracks(data.results);
        navigate("/main");
      })
      .catch((err) =>
        console.log(err)
      );
  };

  useEffect(() => {
    if (genre.length) {
      callTracks(genre);
    }
  }, [genre]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LandingPage setGenre={setGenre} />}
        />
        <Route
          path="/main"
          element={
            <MainPage
              randomTracks={randomTracks}
              setGenre={setGenre}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
