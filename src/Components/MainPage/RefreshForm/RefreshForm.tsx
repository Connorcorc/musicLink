import React, { useState } from "react";

type RefreshFormProps = {
  setGenre: (data: string) => void;
};

export const RefreshForm = ({ setGenre}: RefreshFormProps) => {
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  const newQuery = () => {
    setGenre(selectedGenre);
    // setSortBy(selectedGenre)
  };

  return (
    <div className="playlist-options">
      <form>
        <label htmlFor="genres" className="hidden">
          Choose a genre:
        </label>

        <select
          className="player-genre nav"
          onChange={(event) => setSelectedGenre(event.target.value)}
          name="genre"
          id="genres"
        >
          <option value="">Choose a genre ▼</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="electronic">Electronic</option>
          <option value="hiphop">HipHop</option>
          <option value="jazz">Jazz</option>
          <option value="indie">Indie</option>
          <option value="filmscore">FilmScore</option>
          <option value="classical">Classical</option>
          <option value="chillout">Chillout</option>
          <option value="ambient">Ambient</option>
          <option value="folk">Folk</option>
          <option value="metal">Metal</option>
          <option value="latin">Latin</option>
          <option value="rnb">RNB</option>
          <option value="reggae">Reggae</option>
          <option value="punk">Punk</option>
          <option value="country">Country</option>
          <option value="house">House</option>
          <option value="blues">Blues</option>
        </select>

        <button className="nav" type="button" onClick={newQuery}>
          VIBE
        </button>
      </form>
    </div>
  );
};
