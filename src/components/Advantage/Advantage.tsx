import React from 'react'
import "./Advantage.scss"

const Advantage = () => {
    return (
        <section className="advantage">
            <div className="advantage__wrapper">
                <div className="advantage__text">
                    <div className="advantage__title">
                        <h2 className="title-section">Преимущества онлайн сессий с психологом
                        </h2>
                    </div>
                    <ul className="advantage__list">
                        <li className="advantage__item">
                            <h4 className="advantage__item-title">
                                Занимайтесь где и как удобно
                            </h4>
                            <p className="advantage__item-desc">
                                Дома или в поездке и в любом часовом поясе
                            </p>
                        </li>
                        <li className="advantage__item">
                            <h4 className="advantage__item-title">
                                Меньше забот - больше мотивации
                            </h4>
                            <p className="advantage__item-desc">
                                Не тратьте время на дорогу и управляйте занятиями в два клика
                            </p>
                        </li>
                        <li className="advantage__item">
                            <h4 className="advantage__item-title">
                                Доверяйте себе
                            </h4>
                            <p className="advantage__item-desc">
                                Выбирайте среди проверенных психологов, которые специаллизируются на ваших запросах
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Advantage