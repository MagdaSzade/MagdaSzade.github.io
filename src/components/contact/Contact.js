import React, { useState } from 'react';
import Form from './ContactForm';
import Info from './Info';
import '../../styles/contact.css';
import Loader from '../Common/Loader';

const Contact = () => {
    const [ infoType, setInfoType ] = useState(null);
    return (
        <div className="content-conteiner solid-border">
            <h1>Wyślij do mnie wiadomość</h1>
            {infoType ? infoType==='L' ? <Loader /> : <Info infoType={infoType} /> : <Form setInfoType={setInfoType}/> }
        </div>
    )
};

export default Contact;