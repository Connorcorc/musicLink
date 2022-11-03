import React from "react";
import './ErrorPage.css'
import error from '../../images/error.png'

const ErrorPage = () => {
    return (
        <div className='errorScreen'>
            <h2>Uh oh! An error occurred!</h2>
            <img className="errorImage" src={error} alt="music app symbol with error symbol over it"></img>
        </div>
    )
}

export default ErrorPage