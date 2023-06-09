import React from 'react';
import "./VideoYoutube.scss"

const VideoYoutube = ({videoLink, width, height}) => {
    // console.log(Date.now(), videoLink);
    return (
        <iframe className="video__frame" width={width} height={height} src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
    )
}

export default VideoYoutube;