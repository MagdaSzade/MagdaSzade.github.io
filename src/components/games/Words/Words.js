import React, { useState } from 'react';
import Board from './Board';
import Display from './Display';
import Dict from './Dict';
import helper from './helper';

import "../../../styles/words/words.css";

const Words = () => {
    const [ selectedWord, selectWord ] = useState("");

    return (
        <section>
            <h1>Znajdz jak najwięcej słów</h1>
            <Display words={helper.words} selectedWord={selectedWord}/>
            <Board game={helper.letters} selectWord={selectWord} />
        </section>
    )
}

export default Words;
