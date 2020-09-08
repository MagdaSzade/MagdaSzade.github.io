import React from 'react';

import Programing from '../Programing';
import OtherSkills from '../OtherSkills';
import Projects from '../Projects';
import skills from './skills';
import tools from './tools';
import { javascriptSkills, javaSkills, otherSkills } from './aboutText';

const buttons = [
    {
        text: "JavaScript",
        content: <Programing items={javascriptSkills}/>
    },
    {
        text: "Projekty",
        content: <Projects />
    },
    {
        text: "Inne",
        content: <Programing items={otherSkills} />
    },
    {
        text: "Narzędzia",
        content: <OtherSkills skills={tools}/>
    },
    {
        text: "Java",
        content: <Programing items={javaSkills}/>
    },
    {
        text: "Umiejętności",
        content: <OtherSkills skills={skills}/>
    },
];

export default buttons;