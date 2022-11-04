import React, { Component, useState } from "react";
import "./MainPage.css"
import RandomTrack from './RandomTracks/RandomTrack'
import {JamObject as randomTrack} from '../../types/JamObject'

type MainPageProps = {
  randomTracks: randomTrack[],
}

export const MainPage = ({randomTracks}: MainPageProps) => {
  
    const tracks = randomTracks.map(randomTrack => {

      return (
        <RandomTrack id={randomTrack.id} artist={randomTrack.artist_name} title={randomTrack.name} audio={randomTrack.audio} key={randomTrack.id} /> )

    })
    console.log(tracks)
    return(

      <main className="mainPage">
        <div className="player">
          
        </div>
        <div className="randomSong">
        {tracks}
        </div>
      </main>
    )
  
}
