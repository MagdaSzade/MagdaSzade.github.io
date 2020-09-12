import React from 'react';
import '../../../styles/words/display.css'

const Display = props => {
    return (
        <div className="display">
            {props.selectedWord}
        </div>
    )
}

export default Display;