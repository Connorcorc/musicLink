import React, { Component, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"
import { fetchTracks } from '../../api-calls';
import { JamObject } from "../../types/jamObject";


type LandingPageProps = {
  setGenre: (genre: string) => void,
  addTracks: (data: JamObject[]) => void
}



const LandingPage = ({setGenre, addTracks}: LandingPageProps) => {
  const [genreChoice, setGenreChoice] = useState<string>('')
  
  const handleChange = (event: ChangeEvent<HTMLSelectElement>)  => {
    setGenreChoice(event.target.value)
  }

  const callTracks = () => {
    fetchTracks(genreChoice)
    .then(data => {
      console.log(data.results);
      addTracks(data.results);
    })
    .catch(err => console.log(err))
  }

  console.log("landing page genreChoice:", genreChoice)
  return(
    <div className="landing">
      <h1>Placeholder logo text</h1>
      <form className='selector'>
        <h1>How do you want to vibe today?</h1>
        <label htmlFor="genres">Choose a genre: </label>
        <select onChange={handleChange} name="genreChoice" id="genres">
          <option value="">Choose a genre</option>
          <option value="all">All Genres</option>
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
        <Link to='/main'>
          {genreChoice && <button type="button" className="select" onClick={callTracks}>Go</button>}
        </Link>
      </form>
    </div>
  )
}

export default LandingPage
