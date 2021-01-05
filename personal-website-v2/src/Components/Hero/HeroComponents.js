import styled from 'styled-components';
import BgImg from '../../Images/about-me-background.jpg';


export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 90vh;
    background: url(${BgImg});
    background-position: center;
    background-size: cover;
`
export const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 30%;
    background-color: #2B2C2C;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 5rem;
    text-decoration: underline;
    padding: 1vh 2vw;

    @media screen and (max-width: 900px) {
        font-size: 7vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 10vw;
    }
`
export const HeroP = styled.p`
    color: #fff;
    font-size: 1.75rem;
    padding: 1vh 2vw;

    @media screen and (max-width: 600px) {
        font-size: 5vw;
    }
`
