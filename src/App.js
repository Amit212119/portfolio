import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Skill from './components/skill';
import Contact from './components/contact';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/skill'
          element={<Skill darkMode={darkMode} />}
        />
        <Route
          path='/contact'
          element={<Contact darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
