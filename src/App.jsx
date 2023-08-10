
import NavBar from './components/Navbar';
import Events from './components/Events';
import './App.css'
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (term) => {
    setSearchTerm(term)
  };



  return (
    <>
      <NavBar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  )
}

export default App
