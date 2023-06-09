import React from 'react'
import DownloadApp from '../DownloadApp/DownloadApp'
import VideoYoutube from '../VideoYoutube/VideoYoutube'
import "./App.scss"

type Props = {
    videoLink: string,
    width: number,
    height: number,
    sideRight: boolean
}

const App = ({ videoLink, width, height, sideRight }: Props) => {

    if (sideRight) {
        return (
            <section className="app">
                <div className="app__video">
                    {/* <VideoYoutube
                        videoLink={videoLink}
                        width={width}
                        height={height}
                    /> */}
                </div>
                <DownloadApp />
            </section>
        )
    }
    
    return (
        <section className="app">
            <DownloadApp />
            <div className="app__video">
                {/* <VideoYoutube
                    videoLink={videoLink}
                    width={width}
                    height={height}
                /> */}
            </div>
        </section>
    )
}

export default App;