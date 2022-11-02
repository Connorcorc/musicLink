import React, {Component, ChangeEvent} from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

type LandingPageProps = {
  setGenre: (genre: string) => void
}

type LandingPageState = {
  genreChoice: string
}

class LandingPage extends Component<LandingPageProps, LandingPageState> {
  state: LandingPageState ={
    genreChoice: ''
  }

  handleChange = (event: ChangeEvent<HTMLSelectElement>)  => {
    this.setState({ genreChoice: event.target.value})
  }

  passGenreToApp = () => {
    this.props.setGenre(this.state.genreChoice)
  }

  render() {
    console.log(this.state)
    return(
      <div className="landing">
        <h1>Placeholder logo text</h1>
        <form className='selector'>
          <h1>How do you want to vibe today?</h1>
          <label htmlFor="genres">Choose a genre: </label>
          <select onChange={this.handleChange} name="genreChoice" id="genres">
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
            {this.state.genreChoice && <button type="button" className="select" onClick={this.passGenreToApp}>Go</button>}
          </Link>
        </form>
      </div>
    )
  }
}

export default LandingPage
