import React, { Component } from "react";
import "./MainPage.css"
import { fetchTracks } from '../../api-calls';
import RandomTrack from './RandomTracks/RandomTrack'
import {JamObject as randomTrack} from '../../types/JamObject'

type MainPageState = {
  randomTracks: {}[],
  // queue: {}[]
}

type MainPageProps = {
  randomTracks: {}[]
}


// hook syntax
// const [randomTracks, setRandomTracks]
// randomTracks = this.props.randomTracks

export class MainPage extends Component<MainPageState, MainPageProps> {
  state: MainPageState = {
    randomTracks: this.props.randomTracks,
    // queue: []
  }

  // getNewRandom = () => {
  //   fetchTracks(this.props.genre)
  //   .then(data => {
  //     console.log(data.results);
  //     this.props.addTracks(data.results);
  //   })
  //   .catch(err => console.log(err))
  // }
  // getIndividualTrack = () => {
  //   const track = this.state.randomTracks.map(randomTrack => {
  //     console.log(track);
  //     singleTrack = <Track image={randomTrack.album_image} artist={randomTrack.artist_name} title={randomTrack.name} audio={randomTrack.audio} id={randomTrack.id} key={randomTrack.id} />
  //
  //   })
  //   return track
  // }


  render() {

    const track = this.props.randomTracks.map(randomTrack => {

      return (
        <RandomTrack artist={randomTrack.artist_name} title={randomTrack.name} audio={randomTrack.audio} key={randomTrack.id} /> )

    })
    console.log(track)
    return(

      <main className="mainPage">
        <div className="player">
          
        </div>
        <div className="randomSong">
        {track}
        </div>
      </main>
    )
  }
}
