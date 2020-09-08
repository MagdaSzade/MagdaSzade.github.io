import React, { useState } from 'react';

import NavBar from '../Common/NavBar';
import buttons from './text/buttons';
import '../../styles/about.css';

const About = () => {
    const [currentView, setCurrentView] = useState(1);

    return (
        <div className="content-conteiner solid-border">
            <div className="content">
                <div className="hello">
                    <h1>Cześć jestem Magda!</h1>
                    <p>Zapraszam do zapoznania się z moim       projektami.</p>
                </div>
                <div className="nav-bar-cont">
                    <NavBar buttons={buttons} onButtonClick=    {setCurrentView} />
                </div>
                <div className="box">
                    {buttons[currentView].content} 
                </div>
            </div>
        </div>
    )
}

export default About;