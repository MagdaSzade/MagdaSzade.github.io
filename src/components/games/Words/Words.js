import React from 'react';
import Letter from './Letter';

import "../../../styles/words/words.css";

const Words = () => {
    const helper = Array.from(Array(5).keys());

    const createRow = () => {
        return helper.map(() => {
            return <Letter letter='A'/>
        })    
    }

    const createBoard = () => {
        return helper.map(() => {
            return createRow();
        });
    }

    return (
        <section>
            <h1>Znajdz jak najwięcej słów</h1>
            <div className="words">
                {createBoard()}
            </div>
        </section>
    )
}

export default Words;
