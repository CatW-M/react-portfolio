import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Voluntiers from '../../assets/images/Voluntiers.png';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import Loader from 'react-loaders'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
<div className="container about-page">
  <div className="text-zone">
    <h1>
      <AnimatedLetters
        letterClass={letterClass}
        strArray={['M', 'y', '', 'W', 'o', 'r', 'k']}
        idx={15}
      />
    </h1>
    <p>
      Voluntiers - Volunteer Management MERN Stack project
      An intuitive app that lets users view and volunteer for 
    </p>
    <p align="LEFT">
      I'm quiet confident, naturally curious, and perpetually working on
      improving my chops one design problem at a time.
    </p>
    <p>
      If I need to define myself in one sentence that would be a family
      person, father of a beautiful daughter, a sports fanatic,
      photography enthusiast, and tech-obsessed!!!
    </p>
  </div>

  <div className="stage-cube-cont">
    <div className="cubespinner">
      <div className="face1">
        <img src={Voluntiers} color="#DD0031" />
      </div>
      <div className="face2">
        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
      </div>
      <div className="face3">
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
      </div>
      <div className="face4">
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
      </div>
      <div className="face5">
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
      </div>
      <div className="face6">
        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
      </div>
    </div>
  </div>
</div>
<Loader type="pacman" />
</>

    )
}

export default Portfolio;