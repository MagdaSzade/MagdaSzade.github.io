import React from 'react';

const Dict = ({words}) => {
    return (
        words.map((word) => {
            return <p>{word}</p>
        })
    )
}

export default Dict;