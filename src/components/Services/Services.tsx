import React, { useState } from 'react'
import "./Services.scss"

const Services = () => {

    const [minutes, setMinutes] = useState('20');
    const [price, setPrice] = useState('980');

    const cost = (status: string, value: string) => {
        const priceMinute = 49;
        console.log("COST");

        if (status === "MINUTES") {
            if (Number(minutes) <= 240) {
                setMinutes(value)
                
                let cost = String(Number(value) * priceMinute);
                setPrice(cost)
            }
        }

        if (status === "PRICE") {
            setPrice(value)

            let min = (Number(value) / priceMinute).toFixed(2);

            if ((Number(min) >= 5) && (Number(min) <= 240)) {
                setMinutes(min)
            }    
        } 
    }

    return (
        <section className="services">
            <div className="services__title">
                <h3 className="title-section">
                    Услуги
                </h3>
            </div>
            <div className="services__wrapper">
                <div className="services-card">
                    <h4 className="services-card__subtitle">
                        24 часа чата
                    </h4>
                    <h3 className="services-card__price">
                        4200&#8381;
                        <span className="price__span">
                            / 24 часа
                        </span>
                    </h3>
                    <ul className="services-card__desc">
                        <li className="services-card__item">
                            24 часа доступа к чату с психологом
                        </li>
                        <li className="services-card__item">
                            Аудио сообщения
                        </li>
                    </ul>
                    <div className="services-card__btn">
                        <button className="btn btn--transparent">
                            Перейти
                        </button>
                    </div>
                </div>
                <div className="services-card services-card--primary">
                    <div className="services-card__popular">
                        Популярное
                    </div>
                    <div className="services-card__subtitle">
                        Аудио/Видео сессии
                    </div>
                    <h3 className="services-card__price services-card--primary__price">
                        49&#8381;
                        <span className="price__span">
                            / 1 минута
                        </span>
                    </h3>
                    <ul className="services-card__desc">
                        <li className="services-card__item">
                            Безлимитный доступа к чату с психологом до начала сессии
                        </li>
                        <li className="services-card__item">
                            Аудио/Видео звонки
                        </li>
                        <li className="services-card__item">
                            Нет лимитов по времени разговора
                        </li>
                    </ul>
                    <div className="services-card__btn">
                        <input
                            className="services-card__input"
                            type={'number'}
                            id='minutes'
                            min={5}
                            max={240} 
                            value={minutes}
                            onChange={(value) => cost("MINUTES", value.target.value)}
                            // onChange={(value) => setMinutes(value.target.value)}
                        />
                        <label className="services-card__label" htmlFor="minutes">min</label>

                        <input
                            className="services-card__input"
                            type={'text'}
                            id="price"
                            value={price}
                            onChange={(value) => cost("PRICE", value.target.value)}
                            // onChange={(value) => setPrice(value.target.value)}
                        />
                        <label className="services-card__label" htmlFor="price">&#8381;</label>

                        <button className="btn btn--transparent services__btn">
                            Перейти
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services