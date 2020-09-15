import React, { useEffect, useRef } from 'react';
import '../../../styles/words/display.css'

const Display = ({selectedWord, words }) => {
    const displayRef = useRef();
    let classType = "display";

    useEffect(() => {
        if (words.includes(selectedWord.toLowerCase())) {
            displayRef.current.className = "display correct"
        } else {
            displayRef.current.className = "display incorrect"
        }
    })
    
    return (
        <div className={classType} ref={displayRef}>
            {selectedWord}
        </div>
    )
}

export default Display;