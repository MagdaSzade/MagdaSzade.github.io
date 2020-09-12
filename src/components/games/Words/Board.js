import React, { useState, useEffect } from 'react';
import Letter from './Letter';

import "../../../styles/words/board.css";

const Board = () => {
    const helper = Array.from(Array(5).keys());
    const [ start, setStart ] = useState(false);
    const [ selectedLetters, selectLetter] = useState([]);

    useEffect(() => {
        console.log(start);
        console.log(selectedLetters);
    })

    const createRow = () => {
        return helper.map(() => {
            return <Letter move={onLetterSelect} start={onStartSellectLetters}/>
        })    
    }

    const createBoard = () => {
        return helper.map(() => {
            return createRow();
        });
    }

    const startWord = () => {
        setStart(true);
    }

    const endWord = () => {
        if (start) {
            selectedLetters.forEach((letter) => {
                letter.className = "letter";
            })
            selectLetter([]);
            setStart(false);
        }
    }

    const onLetterSelect = (letter) => {
        if (start) {
            letter.className += " selected";
            selectLetter([...selectedLetters, letter]);
        }
    }

    const onStartSellectLetters = (letter) => {
        letter.className += " selected";
        selectLetter([...selectedLetters, letter]);
    }


    return (
        <div className="board"
        onMouseDown={startWord}
        onMouseUp={endWord}
        onMouseLeave={endWord}>
            {createBoard()}
        </div>
    )
}

export default Board;