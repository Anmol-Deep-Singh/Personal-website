import './App.css'
import './main.css'
import React, { useState, useEffect } from 'react'
import ExpCard from './components/ExpCard.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import {projectData,experienceData,skillsData} from './components/data/data.js'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

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
            <h1>Anmoldeep Singh</h1>
            <div className="trasnform-div">Software Engineer </div>
            <div className="para">
              <p>Passionate about leveraging AI to enhance productivity and solve complex problems. Experienced in building innovative AI-powered solutions, optimizing RAG pipelines, and developing full-stack applications. Always eager to take on new challenges and improve my skills daily.</p>
            </div>
            <div className="go-buttons">
              <button><FontAwesomeIcon icon={faGithub} id="logo"/>Github</button>
              <button><FontAwesomeIcon icon={faLinkedin}id="logo"/>Linkedin</button>
              <button><FontAwesomeIcon icon={faEnvelope}id="logo"/>Email</button>
            </div>
          </div>
          <div className="experince-section">
            <h2>Expperince</h2>
            <ExpCard/>
            <ExpCard/>
            <ExpCard/>
            <ExpCard/>
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
            <h2>Projects</h2>
            <div className="project-constainer">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>          
            </div>
          </div>
          <div className="lets-connect">
            <h2>Let's Connect</h2>
            <button>LINDIIM</button>
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
