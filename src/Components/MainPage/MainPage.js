import React, { Component } from "react";
export class MainPage extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <>{this.props.musicGenre}</>
    )
  }
}