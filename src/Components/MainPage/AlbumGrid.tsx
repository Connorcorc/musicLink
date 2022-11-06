import React from "react";


const AlbumGrid = ({albumCover}: {albumCover: string}) => {
  return (
    <span>
      <img src={albumCover} />
    </span>
  )
}

export default AlbumGrid