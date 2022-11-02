import React, { Component } from "react";
import "./MainPage.css"

type MainPageState = {
  randomTracks: {}[],
  // queue: {}[]
}

type MainPageProps = {
  randomTracks: {}[]
}

export class MainPage extends Component<MainPageState, MainPageProps> {
  state: MainPageState = {
    randomTracks: [],
    // queue: []
  }
  
  render() {
    return(
      <main className="mainPage">
        <div className="player">
        <p>PLAYER</p>
        </div>
        <div className="randomSong">
        <p>RANDOM TRACKS</p>
        </div>
      </main>
    )
  }
}
