import React from 'react'
import "./Work.scss"

const Work = () => {
    return (
        <section className="work">
            <div className="work__title">
                <h2 className="title-section-center">
                    Как это устроено
                </h2>
            </div>
            <ul className="work__works">
                <li className="work__work-item">
                    <div className="work-item__index">1</div>
                    <div className="work-item__inner">
                        <h5 className="work-item__title">
                            Заполните простую анкету
                        </h5>
                        <p className="work-item__desc">
                            Расскажите, что вас беспокоит и что важно в психологе.
                        </p>
                    </div>
                </li>
                <li className="work__work-item">
                    <div className="work-item__index">2</div>
                    <div className="work-item__inner">
                        <h5 className="work-item__title">
                            Выберите психолога
                        </h5>
                        <p className="work-item__desc">
                            Выберите понравившегося психолога
                        </p>
                    </div>
                </li>
            </ul>
            <ul className="work__works">
                <li className="work__work-item">
                    <div className="work-item__index">3</div>
                    <div className="work-item__inner">
                        <h5 className="work-item__title">
                            Выберите способ связи с психологом
                        </h5>
                        <p className="work-item__desc">
                            49руб/мин по <span className="desc__span">аудио/видео связи</span> 200руб за 24 часа <span className="desc__span">чата + аудио сообщения</span>
                        </p>
                    </div>
                </li>
                <li className="work__work-item">
                    <div className="work-item__index">4</div>
                    <div className="work-item__inner">
                        <h5 className="work-item__title">
                            Начните общение
                        </h5>
                        <p className="work-item__desc">
                            Все общение происходит через платформу <span className="desc__span">SPEAK</span>. Вслучае если психолог вам не понравится, вы можете заменить его без дополнительных переплат
                        </p>
                    </div>
                </li>
            </ul>
            <div className="work__btn">
                <button className="btn btn--border">Начать общение</button>
            </div>
        </section>
    )
}

export default Work;