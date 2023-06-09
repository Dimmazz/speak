import React from 'react';
import VideoYoutube from '../VideoYoutube/VideoYoutube';
import "./About.scss"

const About = () => {
    return (
        <section className="about">
            <div className="about_title">
                <h2 className="title-section-center">
                    О сервисе
                </h2>
            </div>
            <div className="about__banner">
                <div className="about__video">
                    {/* <VideoYoutube
                        videoLink="https://www.youtube-nocookie.com/embed/MVz93PPSBK4"
                        width={760}
                        height={423}
                    /> */}
                </div>
                <div className="about__stats">
                    <div className="stats__item">
                        <div className="stats__value">
                            900 +
                        </div>
                        <p className="stats__desc">
                            регистраций вчера
                        </p>
                    </div>
                    <div className="stats__item">
                        <div className="stats__value">
                            75 000 +
                        </div>
                        <p className="stats__desc">
                            проведено сессий
                        </p>
                    </div>
                    <div className="stats__item">
                        <div className="stats__value">
                            354 +
                        </div>
                        <p className="stats__desc">
                            психологов
                        </p>
                    </div>
                </div>
            </div>
            <div className="about__compilation">
                <div className="compilation__item">
                    <h5 className="compilation__title">
                        Подбор “По позже”
                    </h5>
                    <p className="compilation__desc">
                        Подбор с возможностью бронирование сессии на будущее
                    </p>
                </div>
                <div className="compilation__item">
                    <h5 className="compilation__title">
                        Подбор “Сейчас”
                    </h5>
                    <p className="compilation__desc">
                        Подбор с возможностью начала сессии “здесь и сейчас”
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About