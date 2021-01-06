import styled from 'styled-components';

export const ProblemSolvingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 90vh;
    background-color: #303131;
`
export const ProblemSolvingHeading = styled.h1`
    color: #fff;
    margin-top: 3vh;
    font-size: 4rem;
    text-decoration: underline; 
    text-align: center;

    @media screen and (max-width: 570px) {
        font-size: 3rem;
    }

`
export const Problem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 2vh 2vw;
    border-bottom: 1px solid #fff;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`
export const ProblemInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`
export const ProblemNumber = styled.h2`
    font-size: 3rem;
    color: #fff;
    margin: 2vw 2vh;

    @media screen and (max-width: 900px) {
        font-size: 2rem;
    }
`
export const ProblemDesc = styled.p`
    font-size: 2rem;
    color: #fff;
    margin: 2vw 2vh;

    @media screen and (max-width: 900px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 570px) {
        font-size: 1.25rem;
    }
`
export const ProblemBtn = styled.button`
    width: 50%;
    height: 20%;
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
        width: 60%;
        height: 30%;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 570px) {
        width: 70%;
        font-size: 1.5rem;

        &:hover {
        background-color: yellow;
        color: black;
        width: 80%;
        height: 30%;
        font-size: 2.5rem;
        }
    }
`

export const SolutionScreenshotContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`
export const SolutionScreenshot = styled.img`
    width: 90%;
    max-width: 100%;
    box-shadow: 0 0 10px 5px;
    margin: 2vh 2vw;
    transition: 0.2s ease-in-out;

`