import React from 'react'
import "./Help.scss"

const Help = () => {
    return (
        <section className="help">
            <div className="help__title">
                <h2 className="title-section">
                    Поможем вам
                </h2>
            </div>
            <ul className="help__pros">
                <li className="pros__item">
                    Разрешить причины сложных отношений с партнером
                </li>
                <li className="pros__item">
                    Снять или снизить остроту переживаний
                </li>
                <li className="pros__item">
                    Справиться с выгоранием на работе и найти мотивацию
                </li>
                <li className="pros__item">
                    Понять себя в отношениях с близкими людьми
                </li>
                <li className="pros__item">
                    Найти себя и понимать свои желания
                </li>
                <li className="pros__item">
                    Исследовать и управлять изменениями в своей жизни
                </li>
            </ul>
        </section>
    )
}

export default Help;