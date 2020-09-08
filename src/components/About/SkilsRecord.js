import React from 'react';

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

export const SkillRecord = ({ skill }) => {
    return (
        <tr>
            <td><div className="text center">{skill.name}</div></td>
            <td><div className="stars center">{createStars(skill.stars)}</div></td>
            <td><div className="link center"><a href={skill.github}>{skill.gittext}</a></div></td>
        </tr>
    )
}

function createStars(stars) {
    let fullstars = stars;
    const starsArr = [null, null, null, null, null];
    return starsArr.map((star, index) => {
        if (fullstars >= 1) {
            fullstars -= 1;
            return <BsStarFill key={index}/>
        } else if (fullstars === 0.5) {
            fullstars = 0;
            return <BsStarHalf key={index}/>
        }
        return <BsStar key={index}/>;
    })
}

export default SkillRecord;