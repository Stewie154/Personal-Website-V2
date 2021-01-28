import React from 'react';
import { FooterContainer, FooterHeading, FooterDisplayContainer, FooterEmail, FooterIconsContainer, FooterIcon } from './FooterElements';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { SiCodecademy } from 'react-icons/si';

const Footer = () => {
    return (
        <FooterContainer id="contact">
            <FooterHeading>Contact</FooterHeading>
            <FooterDisplayContainer>
                    <FooterEmail href="mailto:stewartmcfarlane1542@outlook.com" rel="noreferrer" target="_blank">
                        stewartmcfarlane1542@outlook.com
                    </FooterEmail>
                <FooterIconsContainer>
                    <FooterIcon href='https://www.linkedin.com/in/stewart-mcfarlane-0429091b8/' target='_blank' aria-label='Linked-In' rel='noopener noreferrer' >
                        <AiOutlineLinkedin/>
                    </FooterIcon>
                    <FooterIcon href='https://github.com/Stewie154' target='_blank' aria-label='GitHub' rel='noopener noreferrer' >
                        <FaGithubSquare/>
                    </FooterIcon>
                    <FooterIcon href='https://www.codecademy.com/learn' target='_blank' aria-label='Codecademy' rel='noopener noreferrer' >
                        <SiCodecademy/>
                    </FooterIcon>
                </FooterIconsContainer>
            </FooterDisplayContainer>
        </FooterContainer>
        
    )
}

export default Footer;
