import React, { useState, useEffect } from 'react';
import Letter from './Letter';

import "../../../styles/words/board.css";

const Board = () => {
    const helper = [
        [{id: 1, letter: 'A'},
         {id: 2, letter: 'B'},
         {id: 3, letter: 'D'},
         {id: 4, letter: 'Z'},
         {id: 5, letter: 'X'}],
        [{id: 6, letter: 'A'},
         {id: 7, letter: 'F'},
         {id: 8, letter: 'E'},
         {id: 9, letter: 'Y'},
         {id: 10, letter: 'W'}],
        [{id: 11, letter: 'A'},
         {id: 12, letter: 'H'},
         {id: 13, letter: 'R'},
         {id: 14, letter: 'B'},
         {id: 15, letter: 'A'}],
        [{id: 16, letter: 'A'},
         {id: 17, letter: 'Y'},
         {id: 18, letter: 'J'},
         {id: 19, letter: 'M'},
         {id: 20, letter: 'C'}],
        [{id: 21, letter: 'A'},
         {id: 22, letter: 'P'},
         {id: 23, letter: 'R'},
         {id: 24, letter: 'A'},
         {id: 25, letter: 'W'}],
    ];
    const [ start, setStart ] = useState(false);
    const [ selectedLetters, selectLetter] = useState([]);

    const createBoard = () => {
        return helper.map((row) => {
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
            selectedLetters.forEach((letter) => {
                letter.className = "letter disable-select";
            });
            selectLetter([]);
            setStart(false);
        }
    }

    const onLetterSelect = (letter) => {
        if (start) {
            if (!selectedLetters.includes(letter)) {
                letter.className += " selected";
                selectLetter([...selectedLetters, letter]);
            } else {
                const index = selectedLetters.indexOf(letter);
                console.log(index);
                let counter = index + 1;
                for (counter; counter < selectedLetters.length; counter++) {
                    selectedLetters[counter].className = "letter disable-select";
                }
                console.log(selectedLetters.splice(0, index + 1));
                selectLetter((selectedLetters) => {return selectedLetters.splice(0, index + 1)});
            }
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