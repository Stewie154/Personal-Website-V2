import React, { useState }from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import { GlobalStyle } from './GlobalStyles';
import  {projectsData } from '../src/Components/Projects/Data';
import { problemSolvingData } from '../src/Components/ProblemSolving/Data';
import ProblemSolving from './Components/ProblemSolving/ProblemSolving';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <GlobalStyle/>
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Hero/>
      <Projects projectsData={projectsData} />
      <ProblemSolving problemSolvingData={problemSolvingData} />
    </div>
  );
}

export default App;
