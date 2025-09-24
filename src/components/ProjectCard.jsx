import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './expCard.css'

const ProjectCard = () => {
  return (
    <div className="project-card">
        <div className="title">
            <h3 className='project_title'>Beatbox</h3>
            <button><FontAwesomeIcon icon={faUpRightFromSquare} id="logo"/></button>
        </div>
        <p>lorenipsujehrbfcljehfdcbljdhcbjhbdfjchvbdjfhvbjdfhblehbhfbdvhbdjhbvfjdhbvjdfhbjdfhbvjdhfbjfdhbjhfbdjhbfdjhbfdjhbf
        </p>
    </div>
  )
}

export default ProjectCard