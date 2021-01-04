import React from 'react';
import { NavbarContainer, NavLogo, NavLinksContainer, NavLink, MenuIcon, /*MenuCloseIcon*/ } from './NavbarElements';

const Navbar = ({menuOpen, toggleMenu}) => {
    return (
        <NavbarContainer>
            <NavLogo>Stewart Mcfarlane</NavLogo>
            <NavLinksContainer menuOpen={menuOpen}>
                <NavLink>About</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>Probelm Solving</NavLink>
                <NavLink>Contact</NavLink>
            </NavLinksContainer>
            <MenuIcon onClick={toggleMenu}/>
            {/* <MenuCloseIcon onClick={toggleMenu}/> */}
        </NavbarContainer>
    )
}

export default Navbar;
