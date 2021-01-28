import React from 'react';
import { NavbarContainer, NavLogo, NavLinksContainer, NavLink, MenuIcon, /*MenuCloseIcon*/ } from './NavbarElements';
import { Link } from 'react-scroll';

const Navbar = ({menuOpen, toggleMenu}) => {
    return (
        <NavbarContainer>
            <NavLogo>Stewart Mcfarlane</NavLogo>
            <NavLinksContainer menuOpen={menuOpen}>
                <Link to="about" smooth={true} duration={750} offset={-80}>
                    <NavLink onClick={toggleMenu}>About</NavLink>
                </Link>
                <Link to="projects" smooth={true} duration={750} offset={-80}>
                    <NavLink onClick={toggleMenu}>Projects</NavLink>
                </Link>
                <Link to="problem-solving" smooth={true} duration={750} offset={-80}>
                    <NavLink onClick={toggleMenu}>Probelm Solving</NavLink>  
                </Link>
                <Link to="contact" smooth={true} duration={750} offset={-80}>
                    <NavLink onClick={toggleMenu}>Contact</NavLink>
                </Link>
            </NavLinksContainer>
            <MenuIcon onClick={toggleMenu}/>
            {/* <MenuCloseIcon onClick={toggleMenu}/> */}
        </NavbarContainer>
    )
}

export default Navbar;
