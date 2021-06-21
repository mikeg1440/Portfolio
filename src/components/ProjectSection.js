import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

export default function ProjectSection() {
    return (
        <ProjectsContainer>
            <ContainerHeader>
                <ProjectHeader>
                    Projects
                </ProjectHeader>
            </ContainerHeader>

            <ProjectCards>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </ProjectCards>

        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    // background: #0000007d;   
`

const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

const ProjectHeader = styled.div`
    font-size: 24pt;
    background: #0000007d;   
    padding: 1rem 2rem;
    font-weight: bold;
`

const ProjectCards = styled.div` 
    display: flex;
    justify-content: space-around;
`