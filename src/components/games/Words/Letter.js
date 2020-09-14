import React, { useRef } from 'react';

import '../../../styles/words/letter.css'

const Letter = (props) => {
    const letterRef = useRef();

    return (
        <div 
            className="letter disable-select" 
            ref={letterRef}
            id={props.id}
            onMouseEnter={() => props.move(letterRef.current)}
            onMouseDown={() => props.start(letterRef.current)}>
                {props.letter}
        </div>
    )
}

export default Letter;