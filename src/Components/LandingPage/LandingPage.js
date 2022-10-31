import React, {Component} from "react";
import "./LandingPage.css"

class LandingPage extends Component {
    constructor() {
        super()
        this.state={

        }
    }
    
    render() {
        return(
            <div className="landing">
                <h1>Placeholder logo text</h1>
                <form className='selector'>
                    <h1>How do you want to vibe today?</h1>
                    <label for="genres">Choose a genre:</label>

                    <select name="genres" id="genres">
                    <option name="all" value="all">All Genres</option>
                    <option name="pop" value="pop">Pop</option>
                    <option name="rock" value="rock">Rock</option>
                    <option name="electronic" value="electronic">Electronic</option>
                    <option name="hiphop" value="hiphop">HipHop</option>
                    <option name="jazz" value="jazz">Jazz</option>
                    <option name="indie" value="indie">Indie</option>
                    <option name="filmscore" value="filmscore">FilmScore</option>
                    <option name="classical" value="classical">Classical</option>
                    <option name="chillout" value="chillout">Chillout</option>
                    <option name="ambient" value="ambient">Ambient</option>
                    <option name="folk" value="folk">Folk</option>
                    <option name="metal" value="metal">Metal</option>
                    <option name="latin" value="latin">Latin</option>
                    <option name="rnb" value="rnb">RNB</option>
                    <option name="reggae" value="reggae">Reggae</option>
                    <option name="punk" value="punk">Punk</option>
                    <option name="country" value="country">Country</option>
                    <option name="house" value="house">House</option>
                    <option name="blues" value="blues">Blues</option>
                    </select>

                    <button className="select" onClick="">Select</button>
                </form>
            </div>
        )
    }
}

export default LandingPage