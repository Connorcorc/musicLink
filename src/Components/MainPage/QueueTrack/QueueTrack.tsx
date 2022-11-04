import React, { useState } from "react";

type QueueProps = {
    id: string, 
    artist: string, 
    title: string, 
    duration: number, 
    audio: string,
}

const QueueTrack = ({id, artist, title, duration, audio}: QueueProps) => {

    return (
        <div className="track-container">
            <h3>{artist}</h3>
            <p>{title}</p>
            <p>{duration}</p>
        </div>
    )
}

export default QueueTrack;
