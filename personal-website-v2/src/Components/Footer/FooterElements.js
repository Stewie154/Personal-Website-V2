import styled from 'styled-components';


export const FooterContainer = styled.div`
    width: 100vw;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #303131;
`
export const FooterHeading = styled.h1`
    margin-top: 2vh;
    font-size: 4rem;
    color: #fff;
    text-decoration: underline;
    text-align: center;

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
    }
`

export const FooterDisplayContainer = styled.div`
    width: 100vw;
    min-height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #2B2C2C;

    @media screen and (max-width: 900px) {
        min-height: 10vh;
        flex-direction: column;
        justify-content: center;
    }
`

export const FooterEmail = styled.h1`
    color: white;
    text-align: center;
    @media screen and (max-width: 900px){
        margin-top: 2vh;
    }
    @media screen and (max-width: 600px) {
        font-size: 1.25rem;
    }
`
export const FooterIconsContainer = styled.div`
    width: 40%;
    min-height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 900px) {
        min-height: 10vh;
        width: 100%;
    }
`
export const FooterIcon = styled.a`
    font-size: 3rem;
    margin-top: 2vh;
    color: #fff;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: yellow;
        font-size: 3.5rem;
    }
`
