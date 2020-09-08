import React, { useState } from 'react';
import gameList from './gamesList';

import '../../styles/content.css'

const Games = () => {
    const [ selectedGame, onGameSelect ] = useState(0);

    return (
        <div className="content-conteiner solid-border">
            <div className="content">
                <div 
                    className="select-project" style={{display: "none"}}
                    onClick={(event) => onGameSelect(event.target.id)}>
                    {gameList.map((project, index) => {
                        return <button 
                            id={index} 
                            key={index}>
                            {project.name}
                        </button>
                    })}
                </div>
                <div className="game-conteiner">
                    {gameList[selectedGame].component}
                </div>
            </div>
        </div>
    )
}

export default Games;
