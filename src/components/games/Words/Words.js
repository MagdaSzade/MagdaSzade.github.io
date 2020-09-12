import React, { useState } from 'react';
import Board from './Board';
import Display from './Display';

import "../../../styles/words/words.css";

const Words = () => {
    const [selectedWord, selectWord ] = useState("");

    return (
        <section>
            <h1>Znajdz jak najwięcej słów</h1>
            <Display selectWord={selectedWord} />
            <Board selectWord={selectWord} />
        </section>
    )
}

export default Words;
