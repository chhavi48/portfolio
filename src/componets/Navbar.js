import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
   <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">CHHAVI SRIVASTAV</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {/* <span className="navbar-toggler-icon"></span> */}
        <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item active" aria-current="page">
            <a className="nav-link" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SKILLS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>
       </ul>
      
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar