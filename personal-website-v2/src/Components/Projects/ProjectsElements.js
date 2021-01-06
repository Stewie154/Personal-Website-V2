import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 
    width: 100vw;
    min-height: 90vh;
    background-color: #2B2C2C;
`
export const ProjectsHeading = styled.h1`
    color: white;
    margin-top: 3vh;
    font-size: 4rem;
    text-decoration: underline;
`
export const ProjectsDisplayContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80vh;
    margin: 2vh 2vw;
`
export const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    min-width: 30%;
    max-width: 95%;
    min-height: 40vh;

    //2 projects per screen with on tablet, one project per screen width on mobile.
    @media screen and (max-width: 900px) {
        width: 45%;
    }
    @media screen and (max-width: 414px) {
        width: 100%;
    }
    
`
export const ProjectImg = styled.img`
    width: 90%;
    max-width: 100%;
    box-shadow: 0 0 10px 5px;
    margin: 2vh 2vw;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        width: 95%;
        max-width: 100%;
        opacity: 0.8;
    }
`
export const ProjectTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: #fff;
    margin: 1vh 1vw;
    text-decoration: underline;
`
export const ProjectDesc = styled.p`
    color: #fff;
    text-align: center;
    margin: 1vh 1vw;
    font-size: 1.25rem;
`
export const ProjectCodeBtn = styled.button`
    width: 60%;
    height: 10%;
    padding: 1vw 1vh;
    margin: 2vh 2vw;
    background-color: #fff;
    font-size: 2rem;
    color: #2B2C2C;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: yellow;
        color: black;
        width: 75%;
        height: 15%;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 768px) {
        width: 70%;
        height: 10%;
    }
`