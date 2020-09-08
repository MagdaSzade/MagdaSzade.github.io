import React, { useState } from 'react';

import { myProjects } from "./text/projects";
import NavBar from '../Common/NavBar';

import '../../styles/projects.css'

const Projects = () => {

    const [ selectedProject, selectProject ] = useState(myProjects[0]); 
    
    function onButtonClick(index) {
        selectProject(myProjects[index]);
        console.log(selectedProject.img);
    }

    return (
        <div className="projects">
            <div className="nav-bar-cont">
               <NavBar buttons={ myProjects } onButtonClick={onButtonClick}/>
            </div>
            <div className="description">
                <div className="header-desc">
                    <h1>{selectedProject.text}</h1>
                    <h2>Technologie: {selectedProject.stack}</h2>
                    <h2>{selectedProject.summary}</h2>
                </div>
                <div className="cooperators">
                    {selectedProject.cooperators ? <div className="center"><p>Razem z:</p></div> : null }
                    {showCooperators(selectedProject.cooperators)}
                </div>
                <div className="desc">
                    <p>Wykonałam: {selectedProject.responsibility}</p>
                    {selectedProject.remark ? <p className="bold">Uwaga! {selectedProject.remark}</p> : null}
                    <a href={`https://${selectedProject.http}`}>{selectedProject.http}</a>
                    <a href={`https://${selectedProject.github}`}>{selectedProject.github}</a>
                </div>
                {selectedProject.img ? <img src={selectedProject.img} alt="screenshot"/> : null }               
            </div>
        </div>
    )
}

function showCooperators(coop) {
    if (coop === undefined) {
        return null
    } else {
        return (
            coop.map((person) => {
            return(
                <div key={person.name}>
                    <a href={`https://${person.git}`}>
                        {person.name}
                    </a>
                </div>
            )
        }))
    }
}

export default Projects;