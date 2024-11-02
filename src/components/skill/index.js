// src/App.js
import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiMysql } from 'react-icons/di';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import './index.css';

function Skill() {
  return (
    <>
      <div className='skillContainer'>
        <h1 className='skillHeading'>SKILLS</h1>
        <div className='skills'>
          <div className='icons'>
            <DiHtml5 size='6em' />
            <span className='skillName'>HTML5</span>
          </div>
          <div className='icons'>
            <DiCss3 size='6em' />
            <span className='skillName'>CSS3</span>
          </div>
          <div className='icons'>
            <DiJavascript1 size='6em' />
            <span className='skillName'>JavaScript</span>
          </div>
          <div className='icons'>
            <DiReact size='6em' />
            <span className='skillName'>React</span>
          </div>
          <div className='icons'>
            <SiNextdotjs size='6em' />
            <span className='skillName'>Next</span>
          </div>
          <div className='icons'>
            <SiTailwindcss size='6em' />
            <span className='skillName'>Tailwind</span>
          </div>
          <div className='icons'>
            <DiMysql size='6em' />
            <span className='skillName'>MySql</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className='skillHeading'>EXPERIENCE</h1>
        <div className='experienceContainer'>
          <div className='experience'>
            <div className='duration'>
              <div className='internTime'>FROM: Sep 2023</div>
              <div className='internTime'>TO: Feb 2024</div>
            </div>
            <div className='role'>Front End Developer </div>
            <div className='company'>The RD Group Of Industries </div>
            <div className='expSkill1'>
              <div className='skillNa'>React.js</div>
              <div className='skillNa'>Next.js</div>

              <div className='skillNa'>JavaScript</div>
              <div className='skillNa'>HTML5</div>
            </div>
            <div className='expSkill2'>
              <div className='skillNa'>CSS3</div>
              <div className='skillNa'>SQL</div>
              <div className='skillNa'>Rest API</div>
            </div>
          </div>
          <div className='experience'>
            <div className='duration'>
              <div className='internTime'>FROM: Sep 2023</div>
              <div className='internTime'>TO: Feb 2024</div>
            </div>
            <div className='role'>Front End Developer </div>
            <div className='company'>The RD Group Of Industries </div>
            <div className='expSkill1'>
              <div className='skillNa'>React.js</div>
              <div className='skillNa'>Next.js</div>

              <div className='skillNa'>JavaScript</div>
              <div className='skillNa'>HTML5</div>
            </div>
            <div className='expSkill2'>
              <div className='skillNa'>CSS3</div>
              <div className='skillNa'>SQL</div>
              <div className='skillNa'>Rest API</div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Skill;
