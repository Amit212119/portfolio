import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className='aboutContainer'>
      <h1 className='aboutHeading'>About Me</h1>
      <div className='aboutGrid'>
        <div className='imageBox'>
          <img
            className='aboutImage'
            src='/aboutamit.jpg'
            alt='amit'
          />
        </div>
        <div className='textBox'>
          <h2>
            I'm Amit Kumar. And I'm a <span className='aboutProfile'>Web Developer.</span>
          </h2>
          <p className='aboutPara'>
            Passionate about Software Development, Goal is to achieve a good position by doing satisfying work
            in the IT field, Self-motivated team player with quick learning skill seeking a position as a
            fresher in software development field
          </p>
          <a
            href='/resume.pdf'
            download='Amit_Kumar.pdf'>
            <button className='resumeButton'>Download Resume</button>
          </a>
        </div>
      </div>
      <div className='personalInfo'>
        <h1>Personal Details</h1>
        <div className='detailList'>
          <div className='detailItem'>
            <span className='infoName'>Name</span>
            <span className='infoDetails'>Amit Kumar Goswami</span>
          </div>
          <div className='detailItem'>
            <span className='infoName'>Date of Birth</span>
            <span className='infoDetails'>04 Aug 2003</span>
          </div>
          <div className='detailItem'>
            <span className='infoName'>Graduation</span>
            <span className='infoDetails'>
              Bachlor of Technology in Computer Science & Engineering. <br />
              <span className='infoDetails'>7.4(CGPA)</span>
              <span className='infoDetails'>(2019-23)</span>
            </span>
          </div>
          <div className='detailItem'>
            <span className='infoName'>Hobbies</span>
            <span className='infoDetails'>Cricket, chess, Badminton</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
