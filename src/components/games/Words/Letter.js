import React, { useRef } from 'react';

import '../../../styles/words/letter.css'

const Letter = (props) => {
    const letterRef = useRef();

    return (
        <div 
            className="letter" 
            ref={letterRef}
            onMouseEnter={() => props.move(letterRef.current)}
            onMouseDown={() => props.start(letterRef.current)}>
                {props.letter}
        </div>
    )
}

export default Letter;