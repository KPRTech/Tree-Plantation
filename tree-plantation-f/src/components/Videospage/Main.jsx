import React from 'react'
import backgroundvideo from "../assets/backgroundvideo.mp4"

const Main = () => {
    return (
        <div className='main mb-6'>
            <div className='overlay'></div>
            <video src={backgroundvideo} autoPlay loop muted />
            <div className='content'>
                <h1>VIDEOS</h1>
            </div>
        </div>
    )
}

export default Main