import React from "react";

const AlbumGrid = ({ albumCover }: { albumCover: string }) => {
  return (
    <span>
      <img src={albumCover} alt="album cover" />
    </span>
  );
};

export default AlbumGrid;
