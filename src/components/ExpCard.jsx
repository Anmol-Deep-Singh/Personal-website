import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './expCard.css'

const ExpCard = ({positon,date,link,company,about}) => {
  return (
    <div className="Expcard" id='zoom-box'>
        <div className="upper">
            <h3>{positon}<button onClick={()=>{window.open(link, "_blank")}}><FontAwesomeIcon icon={faUpRightFromSquare} id="logo"/></button></h3>
            <h4>{company} | {date}</h4>
        </div>
        <div className="lower">
          <p>{about}</p>
        </div>
    </div>
  )
}

export default ExpCard