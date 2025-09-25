import './App.css'
import './main.css'
import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faMoon } from '@fortawesome/free-solid-svg-icons';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import {projectData,experienceData,skillsData} from './components/data/data.js'
import ExpCard from './components/ExpCard.jsx'
import ProjectCard from './components/ProjectCard.jsx'

const titles = [
  "Software Engineer",
  "AI Engineer",
  "Cloud Engineer"
];

function App() {
  const [theme, setTheme] = useState("dark");
  const [currentTitle, setCurrentTitle] = useState(0);
  const [nextTitle, setNextTitle] = useState(1);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLeaving(true);
      setTimeout(() => {
        setCurrentTitle(nextTitle);
        setNextTitle((nextTitle + 1) % titles.length);
        setIsLeaving(false);
      }, 1000); // 1 second for animation
    }, 5000); // 5 seconds between switches
    return () => clearInterval(interval);
  }, [nextTitle]);

  return (
    <>
    <div className="fullpage" id={theme}>
      <div className={`navbar`}>
        <button className='name-but'>Anmoldeep Singh</button>
        <div className="navs-but">
          <button>About</button>
          <button>Skills</button>
          <button>Experience</button>
          <button>Projects</button>
          <button onClick={() => setTheme(theme => theme === "dark" ? "light" : "dark")}>
            {theme === "dark"
              ? <FontAwesomeIcon icon={faMoon} id="logo" />
              : <WbSunnyOutlinedIcon id="logo" />}
          </button>
        </div>
      </div>
      <div className={`page`} >
        <div className="main">
          <div className="about-section">
            <h1>Hello,I'm</h1>
            <h1 className='Anmol'>Anmoldeep Singh</h1>
            <div style={{ position: "relative", height: "3.5rem", overflow: "hidden" }}>
              <span
                className={`trasnform-div ${isLeaving ? "leave" : ""}`}
                key={currentTitle}
              >
                {titles[currentTitle]}
              </span>
              {isLeaving && (
                <span className="trasnform-div enter" key={nextTitle}>
                  {titles[nextTitle]}
                </span>
              )}
            </div>
            <div className="para">
              <p>Passionate about leveraging AI to enhance productivity and solve complex problems. Experienced in building innovative AI-powered solutions, optimizing RAG pipelines, and developing full-stack applications. Always eager to take on new challenges and improve my skills daily.</p>
            </div>
            <div className="go-buttons">
              <button onClick={()=>{window.open("https://github.com/Anmol-Deep-Singh", "_blank")}}><FontAwesomeIcon icon={faGithub} id="logo"/>Github</button>
              <button onClick={()=>{window.open("https://www.linkedin.com/in/anmoldeep-singh-066526202/?trk=public-profile-join-page", "_blank")}}><FontAwesomeIcon icon={faLinkedin}id="logo"/>Linkedin</button>
              <button onClick={()=>{window.open("https://www.linkedin.com/in/anmoldeep-singh-066526202/?trk=public-profile-join-page", "_blank")}}><FontAwesomeIcon icon={faEnvelope}id="logo"/>Email</button>
            </div>
          </div>
          <div className="experince-section">
            <h2 className='titles'>Experience</h2>
            {experienceData.map((exp, index) => (
                <ExpCard key={index} positon={exp.positon} date={exp.date} link={exp.link} company={exp.comany} about={exp.about}/>
            ))}
          </div>
          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-container">
              {skillsData.map((skill, index) => (
                <div className="skill-card" key={index}>{skill}</div>
              ))}
            </div>
          </div>
          <div className="project-section">
            <h2 className='titles'>Projects</h2>
            <div className="project-container">
            {projectData.map((Data, index) => (
                <ProjectCard key={index} title={Data.title} about={Data.about} github={Data.github}/>
              ))}                  
            </div>
          </div>
          <div className="lets-connect titles">
            <h2>Let's Connect</h2>
            <button className='lets-connect-btn' onClick={()=>{window.open("https://www.linkedin.com/in/anmoldeep-singh-066526202/?trk=public-profile-join-page", "_blank")}}><FontAwesomeIcon icon={faLinkedin} id="logo-opp"/><p>Connect on LinkedIn</p></button>
          </div>
        </div>
        </div>
        <div className={`footer`} >
          <p>© 2025 Anmoldeep Singh. All rights reserved.</p>
      </div>      
    </div>
    </>
  )
}

export default App
