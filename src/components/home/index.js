import React from 'react';
import './index.css';
import myImage from '/';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <div className='homeContainer'>
        <div className='headLine'>
          <div>
            <p className='paragraph'>
              Hi, I am <br /> <span className='name'> Amit Kumar</span> <br />
              <span className='skillLine'>And I'm a</span>{' '}
              <span className='profileName'>
                {' '}
                <Typewriter
                  words={['Web Developer']}
                  loop={false}
                  cursor
                  cursorStyle='!'
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
                
              </span>
              <br />
              <span className='secondPara'>Bringing Creativity and Functionality Together</span>
            </p>
            <a href='mailto:amgiri1010@gmail.com?subject=React Developer&body=Body%20text'>
              <button className='hireButton'>Hire Me</button>
            </a>
          </div>
        </div>
        <div className='imgbox'>
          <img
            className='image'
            src='/web-development.webp'
            alt='amit'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
