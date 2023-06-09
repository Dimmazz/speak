import React, { Fragment } from 'react'
import "./DownloadApp.scss"

const DownloadApp = () => {
    return (
        <div className="app__text">
            <h2 className="app__title">
                Скачайте бесплатно приложение SPEAK
            </h2>
            <div className="app__mini-banner">
                <div className="mini-banner__title">
                    SPEAK
                </div>
                <div className="mini-banner__desc">
                    <p>онлайн сессии с психологом </p>
                    <p>доступно для iOS и Android</p>
                </div>
            </div>
            <div className="app__btns">
                <a className="app__btn-apple"></a>
                <a className="app__btn-google"></a>
            </div>
        </div>
    )
}

export default DownloadApp