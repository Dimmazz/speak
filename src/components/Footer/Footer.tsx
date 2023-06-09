import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__column">
                <div className="footer__logo">
                    <div className="logo"></div>
                </div>
                <nav className="footer__nav">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="error/404">Home</a>
                        </li>
                        <li className="footer__item">
                            <a href="error/404">Blog</a>
                        </li>
                        <li className="footer__item">
                            <a href="error/404">Privacy Policy</a>
                        </li>
                        <li className="footer__item">
                            <a href="error/404">About us</a>
                        </li>
                        <li className="footer__item">
                            <a href="error/404">Contact</a>
                        </li>
                        <li className="footer__item">
                            <a href="error/404">Terms and Conditions</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer__column">
                <ul className="footer__social">
                    <li className="social__item">
                        <a href="error/404"></a>
                    </li>
                    <li className="social__item">
                        <a href="error/404"></a>
                    </li>
                    <li className="social__item">
                        <a href="error/404"></a>
                    </li>
                    <li className="social__item">
                        <a href="error/404"></a>
                    </li>
                </ul>
                <div className="footer__contacts">
                    <p className="contacts__email"><a href="mailto:info@speak.help">info@speak.help</a></p>
                    <p className="contacts__address">33 W 60th Street, 8th FI New York, NY 10023</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer