import React, { Component, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"
import { fetchTracks } from '../../api-calls';
import { JamObject } from '../../types/JamObject';
import vibeStreet from '../../images/vibeStreet.jpg'


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
    <div className="landing" style={{
      backgroundImage: `url(${vibeStreet})`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      backgroundAttachment: `fixed`,
      backgroundPosition: `center`
      }} 
    >
      <h1 className="logo">Welcome to</h1>
      <h2 className="vibe-choice">How do you want to vibe today?</h2>
      <div className='selector'>
        <label htmlFor="genres" className="hidden">Choose a genre: </label>
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
        <span className="focus"></span>
      </div>
        <Link to='/main'>
          {genreChoice && <button type="button" className="genre-select-button" onClick={callTracks}>VIBE</button>}
        </Link>
    </div>
  )
}

export default LandingPage
