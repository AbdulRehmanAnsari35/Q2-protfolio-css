import React from 'react'
import '../app/styles/Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
        <div className='skills-grid'>
            <div data-aos="zoom-in-down" className="skills-left">
                <h2 className='skills-heading' data-aos="zoom-in-down">Technologies I work with</h2>
                <p className='skills-text'>
                I am efficient web developer with expertise in HTML, CSS, JavaScript, and TypeScript, ensuring reliable, maintainable code. Proficient in frameworks like Tailwind CSS, Next.js, and React, you specialize in creating responsive, high-performance user experiences. Your focus on detail, code efficiency, and staying updated with the latest tools makes you a valuable asset to any team
                </p>
            </div>
            <div className='skills-right'>
                <div className='sills-icons-grid'>
                    <div className='skills-space'>
                    <h2 data-aos="zoom-in-down">Typescript</h2>
                    <h2 data-aos="zoom-in-down">React.js</h2>
                    <h2 data-aos="zoom-in-down">Next.js</h2>
                    </div>
                    <br />
                    <div className='skills-space'>
                    <h2 data-aos="zoom-in-down">Tailwind</h2>
                    <h2 data-aos="zoom-in-down">CSS</h2>
                    <h2 data-aos="zoom-in-down">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Skills
