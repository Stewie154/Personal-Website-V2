import React from 'react';
import { ProjectsContainer, ProjectsHeading, ProjectsDisplayContainer, Project, ProjectImg, ProjectTitle, ProjectDesc, ProjectCodeBtn } from './ProjectsElements';
import {projectsData} from './Data';
const Projects = () => {
    return (
        <div>
            <ProjectsContainer>
                <ProjectsHeading>Projects</ProjectsHeading>
                <ProjectsDisplayContainer>
                    <Project>
                        <ProjectImg src={projectsData[0].screenshot}/>
                        <ProjectTitle>{projectsData[0].name}</ProjectTitle>
                        <ProjectDesc>{projectsData[0].desc}</ProjectDesc>
                        <ProjectCodeBtn>{projectsData[0].viewCode}</ProjectCodeBtn>
                    </Project>
                    <Project>
                        <ProjectImg src={projectsData[0].screenshot}/>
                        <ProjectTitle>{projectsData[0].name}</ProjectTitle>
                        <ProjectDesc>{projectsData[0].desc}</ProjectDesc>
                        <ProjectCodeBtn>{projectsData[0].viewCode}</ProjectCodeBtn>
                    </Project>
                    <Project>
                        <ProjectImg src={projectsData[0].screenshot}/>
                        <ProjectTitle>{projectsData[0].name}</ProjectTitle>
                        <ProjectDesc>{projectsData[0].desc}</ProjectDesc>
                        <ProjectCodeBtn>{projectsData[0].viewCode}</ProjectCodeBtn>
                    </Project>
                    <Project>
                        <ProjectImg src={projectsData[0].screenshot}/>
                        <ProjectTitle>{projectsData[0].name}</ProjectTitle>
                        <ProjectDesc>{projectsData[0].desc}</ProjectDesc>
                        <ProjectCodeBtn>{projectsData[0].viewCode}</ProjectCodeBtn>
                    </Project>
                    <Project>
                        <ProjectImg src={projectsData[0].screenshot}/>
                        <ProjectTitle>{projectsData[0].name}</ProjectTitle>
                        <ProjectDesc>{projectsData[0].desc}</ProjectDesc>
                        <ProjectCodeBtn>{projectsData[0].viewCode}</ProjectCodeBtn>
                    </Project>
                </ProjectsDisplayContainer>
            </ProjectsContainer>
        </div>
    )
}

export default Projects;
