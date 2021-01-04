import React, { useState }from 'react';
import Navbar from './Components/Navbar/Navbar';
import { GlobalStyle } from './GlobalStyles';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <GlobalStyle/>
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </div>
  );
}

export default App;
