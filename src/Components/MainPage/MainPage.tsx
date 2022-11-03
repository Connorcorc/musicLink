import React, { Component } from "react";
import "./MainPage.css"
import { fetchTracks } from '../../api-calls';
import RandomSongs from './RandomSongs/RandomSongs'

type MainPageState = {
  randomTracks: {}[],
  queue: {}[],
  nowPlaying: {}[]
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
    queue: [],
    nowPlaying: []
  }

  addToQueue = (id) => {
    console.log('event', id)
    const selectedTrack = this.state.randomTracks.find(track => track.id === id)
    console.log(selectedTrack)
    this.setState({queue: [selectedTrack]})
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
        <RandomSongs id={randomTrack.id} artist={randomTrack.artist_name} title={randomTrack.name} addToQueue={this.addToQueue} audio={randomTrack.audio} key={randomTrack.id} /> )

    })
    console.log('queue render', this.state.queue)
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
