import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

import '../../styles/otherSkills.css'

const OtherSkills = (props) => {
    return (
        <div className="other-skills table-conteiner">
            <table>
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Poziom</th>
                    </tr>
                </thead>
                <tbody>
                    {props.skills.map((skill) => {
                        return (
                            createRow(skill)
                        )
                    })}
                </tbody>
            </table>  
        </div>
    )
}

const createRow = (skill) => {
    return (
        <tr key={skill.name}>
            <td>
                <div className="text center">{skill.name}</div>
                <div className="heart-icon">
                    {skill.addIcon ? skill.addIcon : null}
                </div>
            </td>
            <td><div className="stars center">{createStars(skill.stars)}</div></td>
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

export default OtherSkills;