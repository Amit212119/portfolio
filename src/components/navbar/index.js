import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = (props) => {


    const toggleTheme = () => {
      props.setDarkMode(!props.darkMode);
    };

  return (
    <>
      <nav className='container'>
        <span className='logo'>Portfolio</span>
        <ul className='list'>
          <li>
            <button
              onClick={toggleTheme}
              className='themeButton'>
              {' '}
              {props.darkMode ? <FaMoon /> : <FaSun />}{' '}
            </button>
          </li>
          <li className='listItem'>
            <Link
              className={props.darkMode ? 'darkListItem' : 'linkItem'}
              to='/'>
              Home
            </Link>
          </li>
          <li className='listItem'>
            <Link
              className={props.darkMode ? 'darkListItem' : 'linkItem'}
              to='/about'>
              About
            </Link>
          </li>
          <li className='listItem'>
            <Link
              className={props.darkMode ? 'darkListItem' : 'linkItem'}
              to='/skill'>
              Skills
            </Link>
          </li>
          <li className='listItem'>
            <Link
              className={props.darkMode ? 'darkListItem' : 'linkItem'}
              to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
