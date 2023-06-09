import React from 'react';
import "./Steps.scss";

const Steps = () => {
    return (
        <section className="steps">
            <div className="steps__title">
                <h2 className="title-section">
                    Как мы отбираем специалистов?
                </h2>
                <h5 className="subtitle-section">
                    Отбор проходят меньше 10% специаллистов
                </h5>
            </div>
            <ul className="steps__inner">
                <li className="steps__step">
                    <h5 className="step__title">
                        Документы об образовании
                    </h5>
                    <p className="step__desc">
                        Обязательно иметь высшее психологическое образование и сертификаты для ведения психотерапии
                    </p>
                </li>
                <li className="steps__step">
                    <h5 className="step__title">
                        Опыт частной практики и личной терапии
                    </h5>
                    <p className="step__desc">
                        Нужно не менее 3-х лет частной практики, личная терапия и регулярные супервизии
                    </p>
                </li>
                <li className="steps__step">
                    <h5 className="step__title">
                        Собеседование с нашим экспертом-ментором
                    </h5>
                    <p className="step__desc">
                        Отслеживаются коммуникативные способности, уровень эмпатии, манера и стиль беседы,  проффесиональные компетенции
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Steps