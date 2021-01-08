import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';

export const NavbarContainer = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #00B1D2FF;
    border-bottom: 2px solid whitesmoke;

    @media screen and (max-width: 900px) {
        justify-content: space-between;
    }
`
export const NavLogo = styled.h1`
    color: #FDDB27FF;
    font-size: 2rem;

    @media screen and (max-width: 900px) {
        font-size: 1.5rem;
        padding-left: 5vw;
    }

`
export const NavLinksContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.8s ease-out;
    background-color: #00B1D2FF;

    @media screen and (max-width: 900px) {
        position: fixed;
        z-index: 10;
        width: 100vw;
        height: 80vh;
        top: 0;
        right: ${({ menuOpen }) => (menuOpen ? '0' : '-1000px') };
        flex-direction: column;
    }
`
export const NavLink = styled.h2`
    font-size: 1.25rem;
    color: #fff;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: yellow;
        text-decoration: underline;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 900px) {
        margin: 5vh;
    }
`
export const MenuIcon = styled(FiMenu)`
    font-size: 2rem;
    display: none;
    margin-right: 5vw;
    color: #FDDB27FF;
    cursor: pointer;
    transition: 0.2s ease-in-out; 
    z-index: 1000;

    &:hover {
        color: yellow;
    }

    @media screen and (max-width: 900px) {
        display: ${({ menuOpen }) => (menuOpen ? 'none' : 'block') }; 
    }
`
/*export const MenuCloseIcon = styled(FaTimes)`
    font-size: 2rem;
    display: none;
    margin-right: 5vw;;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out; 
    z-index: 1000;

    &:hover {
        color: yellow;
    }

    @media screen and (max-width: 768px) {
        display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none') };
          
    }
`
*/ // Come back to this later. 