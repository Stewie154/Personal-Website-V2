import React from 'react';
import { ProjectsContainer, ProjectsHeading, ProjectsDisplayContainer, Project, ProjectImg, ProjectTitle, ProjectDesc, ProjectCodeBtn } from './ProjectsElements';

const Projects = ({ projectsData }) => {
    return (
        <div id="projects">
            <ProjectsContainer>
                <ProjectsHeading>Projects</ProjectsHeading>
                <ProjectsDisplayContainer>
                {projectsData.map( ( project, index ) => {
                        return (
                            <Project key={index}>
                                <a 
                                    href={project.projectLink} 
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={project.name}
                                >
                                    <ProjectImg src={project.screenshot}/>
                                </a>
                                <ProjectTitle>{project.name}</ProjectTitle>
                                <ProjectDesc>{project.desc}</ProjectDesc>
                                <ProjectCodeBtn
                                    href={project.gitHubLink} 
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={project.viewCode}
                                >
                                    {project.viewCode}
                                </ProjectCodeBtn>
                            </Project>
                        )
                        })}
                </ProjectsDisplayContainer>
            </ProjectsContainer>
        </div>
    )
}   

export default Projects;
