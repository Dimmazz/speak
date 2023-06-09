import React, { useEffect, useState } from 'react'

import SpeakersCarousel from '../SpeakersCarousel/SpeakersCarousel';

import "./Speakers.scss"

interface Speaker {
    id: number,
    preview: string,
    name: string,
    rating: number
}

const Speakers = () => {
    const speakersSenses: Array<Speaker> = [
        {
            id: 4213,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4214,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4215,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4216,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4217,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4218,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4219,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4220,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4221,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4222,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4213,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4214,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4215,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4216,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4217,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4218,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4219,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4220,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4221,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4222,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4213,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4214,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4215,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4216,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4217,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        }
    ]

    const speakersLoneliness: Array<Speaker> = [
        {
            id: 4213,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4214,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4215,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4216,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4217,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4213,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4214,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4215,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4216,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4217,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4213,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4214,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4215,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4216,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4217,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4213,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4214,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4215,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4216,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4217,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        },
        {
            id: 4213,
            preview: '3.png',
            name: 'Артур Островский',
            rating: 5
        },
        {
            id: 4214,
            preview: '1.png',
            name: 'Илья Благов',
            rating: 5
        },
        {
            id: 4215,
            preview: '2.png',
            name: 'Иванна Есина',
            rating: 5
        },
        {
            id: 4216,
            preview: '5.png',
            name: 'Андрей Ян',
            rating: 5
        },
        {
            id: 4217,
            preview: '4.png',
            name: 'Юля Заграничная',
            rating: 5
        }
    ]

    const [theme, setTheme] = useState('Senses');

    // let currentSpeakers: Array<Speakers> = [];

    // const switchSpeakers = (theme: string) => {        
    //     if (theme === "Senses") {
    //         currentSpeakers = speakersSenses
    //         return currentSpeakers
    //     }

    //     if (theme === "Loneliness") {
    //         currentSpeakers = speakersLoneliness
    //         return currentSpeakers
    //     }
    // }

    const speakers: object = {
        speakersSenses,
        speakersLoneliness
    }

    const switchTheme = (elem: any) => {
        // БЕРЁМ ВСЕ ЭЛЕМЕНТЫ 
        const themes = document.querySelectorAll(".themes__item")

        // УБИРАЕМ У НИХ У ВСЕХ АКТИВНЫЙ СТАТУС
        themes.forEach((theme) => {
            theme.classList.remove("themes__item--active")
        })

        // ПРИСВАЕВЫВАЕМ АКТИВНЫЙ СТАТУС ДЛЯ НАЖАТОГО ITEM 
        elem.target.classList.toggle("themes__item--active")

        // БЕРЁМ ДАННЫЕ ITEM 
        const currentTheme: string = elem.target.dataset.theme
        setTheme(currentTheme)
        // switchSpeakers(currentTheme)
    }

    console.log(speakers);
    

    return (
        <section className="speakers">
            <div className="speakers__title">
                <h2 className="title-section-center">
                    Психологи работающие с актуальными темами
                </h2>
            </div>
            <ul className="speakers__themes">
                <li className="themes__item themes__item--active" onClick={switchTheme} data-theme={"Senses"}>Чувства</li>
                <li className="themes__item" onClick={switchTheme} data-theme={"Loneliness"}>Одиночество</li>
                <li className="themes__item" onClick={switchTheme} data-theme={"Bad-habits"}>Вредные привычки</li>
                <li className="themes__item" onClick={switchTheme} data-theme={"Relations"}>Отношения</li>
                <li className="themes__item" onClick={switchTheme} data-theme={"Work"}>Работа</li>
                <li className="themes__item" onClick={switchTheme} data-theme={"Family"}>Смыслы</li>
                <li className="themes__item" onClick={switchTheme} data-theme={"Sexual-orientation"}>Сексуальная ориентация</li>
                <li className="themes__item" onClick={switchTheme} data-theme={"Aggression"}>Агрессия</li>
                <li className="themes__item" onClick={switchTheme} data-theme={"Difficult situation"}>Тяжёлая ситуация</li>
                <li className="themes__item themes__item--show-more">+ 300 психологов</li>
            </ul>

            <SpeakersCarousel speakers={speakers} />
            
        </section>
    )
}

export default Speakers