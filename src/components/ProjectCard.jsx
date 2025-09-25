import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './expCard.css'

const ProjectCard = ({title,about,github}) => {
  return (
    <div className="project-card" id='zoom-box'>
        <div className="title">
            <h3 className='project_title'>{title}</h3>
            <button onClick={()=>{window.open(github, "_blank")}}><FontAwesomeIcon icon={faUpRightFromSquare} id="logo"/></button>
        </div>
        <p>{about}</p>
    </div>
  )
}

export default ProjectCard