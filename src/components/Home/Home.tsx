import React, { Fragment } from 'react'
import App from '../App/App';
import "./Home.scss"

const Home = () => {
    return (
        <Fragment>
            <section className="home">
                <div className="home__subtitle">
                    +300 прошедших отбор психологов
                </div>
                <h1 className="home__title">
                    Сессии с психологом<br />Онлайн
                </h1>
                <div className="home__btn">
                    <button className="btn btn--filled">
                        Начать беседу
                    </button>
                </div>
            </section>
            
            <App
                videoLink="https://www.youtube-nocookie.com/embed/MVz93PPSBK4"
                width={615}
                height={341} 
                sideRight={false}
            />

            {/* <section className="app">
                <div className="app__video">
                    <VideoYoutube
                        videoLink="https://www.youtube-nocookie.com/embed/MVz93PPSBK4"
                        width={615}
                        height={342}
                    />
                </div>
                <DownloadApp />
            </section> */}
        </Fragment>
    )
}

export default Home;