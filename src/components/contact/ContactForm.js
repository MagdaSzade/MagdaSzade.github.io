import React, { useState } from 'react';
import sendEmail from '../../api/message';

const Form = (props) => {
    const [ email, setEmail ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ isBot, setBot ] = useState(false);

    const [ emailErrorClass, setEmailErrorClass ] = useState("error");
    const [ titleErrorClass, setTitleErrorClass ] = useState("error");
    const [ messageErrorClass, setMessageErrorClass ] = useState("error");

    const onFormSubmit = async (event) => {
        event.preventDefault();
        let isValid = true;
        if (!isBot) {
            if (!email.includes("@")) {
                setEmailErrorClass("error display-error");
                isValid = false;
            }
            if (title.length <= 0 ) {
                setTitleErrorClass("error display-error");
                isValid = false;
            }
            if (message.length <= 0) {
                setMessageErrorClass("error display-error");
                isValid = false;
            }
            if (isValid) {
                try {
                    props.setInfoType('L');
                    const res = await sendEmail({ email, title, message });
                    props.setInfoType(res.status);
                } catch (err) {
                    props.setInfoType(700);
                }
            }  
        } 
    };

    return (
        <div className="contact">
            <form onSubmit={onFormSubmit}>
                <div className="data-conteiner">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        required 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        onClick={(e) => {setEmailErrorClass("error")}}
                        minLength = "4"
                        maxLength = "30"
                        placeholder="Enter your email" />
                    <div className={emailErrorClass}>Niepoprawny adres email</div>
                </div>
                <div className="data-conteiner">
                    <label htmlFor="title">Temat</label>
                    <input 
                        type="text" 
                        id="title"
                        name="title"
                        required
                        value={title}
                        onClick={(e) => {setTitleErrorClass("error")}}
                        onChange={(e) => {setTitle(e.target.value)}}
                        minLength = "5"
                        maxLength = "50"  
                        placeholder="About...?" />
                    <div className={titleErrorClass}>Temat nie może być pusty</div>
                </div>
                <div className="data-conteiner">
                    <label htmlFor="message">Wiadomość</label>
                    <textarea 
                        id="message"
                        name="message"
                        required
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                        onClick={(e) => {setMessageErrorClass("error")}}
                        minLength="10"
                        maxLength = "250"
                        placeholder="Napisz do mnie ;-)" />
                    <div className={messageErrorClass}>Treść nie może być pusta.</div>
                </div>
                    <button type="submit">WYŚLIJ</button>
                    <input 
                        type="text"
                        name="phone"
                        className="phone"
                        onChange={(e) => {setBot(true)}}
                    />
            </form>
        </div>
    )
}

export default Form;