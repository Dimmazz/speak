import React from 'react'
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="logo"></div>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="error/404">О нас</a></li>
                    <li className="nav__item"><a href="error/404">Блог</a></li>
                    <li className="nav__item"><a href="error/404">Контакты</a></li>
                </ul>
            </nav>
            <div className="header__btn">
                <button className="btn btn--filled">
                    Войти
                </button>
            </div>
        </header>
    )
}

export default Header