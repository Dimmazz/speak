import React, { Component, ReactNode } from 'react'
import Slider from "react-slick";
import Speakers from "../Speakers/Speakers"
// import speakerPreview from "../../assets/img/webp/Speakers/speaker.png"



// <======= STYLES =======> //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SpeakersCarousel.scss"

interface Speaker {
    id: number,
    preview: string,
    name: string,
    rating: number
}

interface Props {
    speakers: {
        speakersSenses: Array<Speaker>,
        speakersLoneliness: Array<Speaker>
    }
}

const SpeakersCarousel = ({ speakers }: any) => {

    // console.log("IMAGES: ", require(`../../assets/img/webp/Speakers/1.png`));

    const svg: ReactNode = <svg className="rating__star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4785 7.19589C16.4268 7.02909 16.2893 6.90753 16.1238 6.88235L11.4737 6.17398L9.39406 1.75678C9.32006 1.59954 9.16728 1.5 9.00002 1.5C8.83274 1.5 8.67998 1.59954 8.60595 1.75678L6.52623 6.17398L1.87625 6.88235C1.71076 6.90753 1.57321 7.02909 1.52153 7.19586C1.46982 7.36265 1.51295 7.54573 1.63274 7.66811L4.99741 11.1064L4.20324 15.9615C4.17494 16.1343 4.24273 16.3089 4.37805 16.412C4.4546 16.4703 4.54528 16.5 4.63639 16.5C4.70635 16.5 4.77654 16.4825 4.84082 16.4471L8.99999 14.1548L13.159 16.447C13.3071 16.5286 13.4865 16.5151 13.6218 16.412C13.7571 16.3089 13.8249 16.1342 13.7967 15.9614L13.0022 11.1064L16.3673 7.66808C16.487 7.54573 16.5302 7.36265 16.4785 7.19589Z" fill="#FFA800" />
    </svg>

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    // const stars = (svg: ReactNode, count: number) => {
    //     let starsArray = []

    //     for (let index = 0; index < count; index++) {
    //         starsArray.push(svg)
    //     }
    //     return starsArray
    // }

    return (
        <Slider {...settings} className="speaker__slider">

            {speakers.speakersSenses.map((speaker: Speaker) => {
                const fileNameExt = speaker.preview;
                // const ratingSpeakers = stars(svg, speaker.rating);

                // let ratingSpeaker = ratingSpeakers.map((elem, index) => {
                //     return elem
                // })

                return (
                    <div className="speakers__speaker">
                        <div className="speaker_preview">
                            <img src={require(`../../assets/img/webp/Speakers/${fileNameExt}`)} />

                        </div>
                        <div className="speaker__title">
                            {speaker.name}
                        </div>
                        <div className="speaker__rating">
                            {svg}
                            {svg}
                            {svg}
                            {svg}
                            {svg}
                        </div>
                        <div className="speaker__arrow"></div>
                    </div>
                )
            })}

            {/*
                return (
                    <ul style={styles.ul}>
                        { props.todos.map((todo, index) => {
                            return (
                            <TodoItem
                                todo={todo}
                                key={todo.id}
                                index={index}
                                onChange={props.onToggle}
                            />)
                        }) }
                    </ul>
                )

             */}

            {/* <div className="speakers__speaker">
                <div className="speaker_preview">
                    <img src={speakerPreview} alt="speaker preview" />
                </div>
                <div className="speaker__title">
                    Илья Благов
                </div>
                <div className="speaker__rating">
                    <img src={speakerStar} alt="star" />
                    <img src={speakerStar} alt="star" />
                    <img src={speakerStar} alt="star" />
                    <img src={speakerStar} alt="star" />
                    <img src={speakerStar} alt="star" />
                </div>
                <div className="speaker__arrow">                    </div>
            </div> */}
        </Slider>
    )
}

export default SpeakersCarousel