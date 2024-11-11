import React, { useRef } from 'react';
import './PlayPause.css'

function PlayPause () {
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current) 
        {
            videoRef.current.play();
        }
    };

    const handlePause = () => {
        if (videoRef.current) 
        {
            videoRef.current.pause();
        }
    };

    return(
        <>
        <video ref={videoRef} width="600" height="400" controls>
            <source src="https://www.w3schools.com/tags/mov_bbb.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className='play-pause-buttons'>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
        </>
    )

}

export default PlayPause;