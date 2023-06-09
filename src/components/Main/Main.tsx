import React from 'react'
import About from '../About/About';
import Advantage from '../Advantage/Advantage';
import App from '../App/App';
import Help from '../Help/Help';
import Home from '../Home/Home'
import Reviews from '../Reviews/Reviews';
import Seo from '../Seo/Seo';
import Services from '../Services/Services';
import Speakers from '../Speakers/Speakers';
import Steps from '../Steps/Steps';
import Work from '../Work/Work';

const Main = () => {
    return (
        <main className="main">
            <Home />
            <Speakers />
            <Help />
            <Advantage />
            <Steps />
            <About />
            <Work />
            <Services />
            <App
                videoLink="https://www.youtube-nocookie.com/embed/MVz93PPSBK4"
                width={615}
                height={342}
                sideRight={true}
            />
            <Reviews />
            <Seo />
        </main>
    )
}

export default Main;