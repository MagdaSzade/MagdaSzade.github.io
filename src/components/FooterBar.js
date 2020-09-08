import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import '../styles/footerbar.css';


const FooterBar = () => {
    return (
        <div className="footer-bar solid-border">
            <p className="footer-text">
                Copyright © Magdalena Szade
            </p>
            <a className="github" href="https://github.com/MagdaSzade" target='_blank' rel="noopener noreferrer">
                <AiFillGithub />    
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/magdalena-szade/" target='_blank' rel="noopener noreferrer">
                <AiFillLinkedin />    
            </a>
        </div>
    );
}

export default FooterBar;