import React, { useState } from 'react';
import Form from './ContactForm';
import Info from './Info';
import Loader from 'react-loader-spinner';
import '../../styles/contact.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Contact = () => {
    const [ infoType, setInfoType ] = useState(null);
    return (
        <div className="content-conteiner solid-border">
            <h1>Wyślij do mnie wiadomość</h1>
            {infoType ? infoType==='L' ? <div className="center"><Loader type="BallTriangle" color="var(--detail-color)" height={80} width={80} /></div> : <Info infoType={infoType} /> : <Form setInfoType={setInfoType}/> }
        </div>
    )
};

export default Contact;