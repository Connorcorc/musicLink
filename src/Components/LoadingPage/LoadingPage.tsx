import React from "react";
import './LoadingPage.css'
import headphones from '../../images/headphones.gif'

const LoadingPage = () => {
    return (
        <div className='loadingScreen'>
            <h2>Queueing some jams...</h2>
            <img className="headset" src={headphones} alt="headphones adjusting"></img>
        </div>
    )
}

export default LoadingPage