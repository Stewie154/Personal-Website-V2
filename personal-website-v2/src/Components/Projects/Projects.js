import React from 'react';
import { ProjectsContainer, ProjectsHeading, ProjectsDisplayContainer, Project, ProjectImg, ProjectTitle, ProjectDesc, ProjectCodeBtn } from './ProjectsElements';

const Projects = ({ projectsData }) => {
    return (
        <div>
            <ProjectsContainer>
                <ProjectsHeading>Projects</ProjectsHeading>
                <ProjectsDisplayContainer>
                {projectsData.map( ( project, index ) => {
                        return (
                            <Project key={index}>
                                <ProjectImg src={project.screenshot}/>
                                <ProjectTitle>{project.name}</ProjectTitle>
                                <ProjectDesc>{project.desc}</ProjectDesc>
                                <ProjectCodeBtn>{project.viewCode}</ProjectCodeBtn>
                            </Project>
                        )
                        })}
                </ProjectsDisplayContainer>
            </ProjectsContainer>
        </div>
    )
}   

export default Projects;
