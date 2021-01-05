import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroP } from './HeroComponents';
const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroH1>About Me</HeroH1>
                <HeroP>My name is Stewart McFarlane and I'm a self-taught developer. Feel free to check out some of my work in the "Projects" section.</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
