import React, { useState } from 'react';
import Letter from './Letter';

import "../../../styles/words/board.css";

const Board = (props) => {
    const [ start, setStart ] = useState(false);
    const [ selectedLetters, selectLetter] = useState([]);

    const createBoard = () => {
        return props.game.map((row) => {
            return row.map(({ letter, id }) => {
                return <Letter letter={letter} id={id} key={id} start={onStartSellectLetters} move={onLetterSelect}/>
            })
        });
    }

    const startWord = () => {
        setStart(true);
    }

    const endWord = () => {
        if (start) {
            let word = '';
            for (let letter of selectedLetters) {
                word += letter.textContent;
            }
            props.selectWord(word);
            selectedLetters.forEach((letter) => {
                letter.className = "letter disable-select";
            });
            selectLetter([]);
            setStart(false);
        }
        setTimeout(() => {props.selectWord("")}, 5000)
    }

    const onLetterSelect = (letter) => {
        if (start) {
            if (!selectedLetters.includes(letter)) {
                letter.className += " selected";
                selectLetter([...selectedLetters, letter]);
            } else {
                const index = selectedLetters.indexOf(letter);
                let counter = index + 1;
                for (counter; counter < selectedLetters.length; counter++) {
                    selectedLetters[counter].className = "letter disable-select";
                }
                selectLetter((selectedLetters) => {return selectedLetters.splice(0, index + 1)});
            }
        }
    }

    const onStartSellectLetters = (letter) => {
        letter.className += " selected";
        selectLetter((selectedLetters) => {return [...selectedLetters, letter]});
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