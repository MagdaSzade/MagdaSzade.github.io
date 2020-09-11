import React, { useRef } from 'react';

import '../../../styles/words/letter.css'

const Letter = (props) => {
    const letterRef = useRef();

    return (
        <div className="letter" ref={letterRef}>{props.letter}</div>
    )
}

export default Letter;