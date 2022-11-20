import { useEffect, useState } from 'react';
import {
    faAmazon,
    faPython,
    faGithub,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import guitar from '../../assets/images/guitar.png'
import './index.scss'

const About = () => {
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
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I enjoy breaking big, complex things down into smaller, more manageable pieces - you could say I have a recursive approach to problems. My methodical approach, and affection for Javascript, led me to 
                        this field. I will complete a 6-month software engineering immersive bootcamp in December 2022, one of the best decisions I've made in my career. 
                    </p>
                    <p align="LEFT">
                    I will find the resources to get the job done or problem solved. I am looking to join an organization where my strong work-ethic, unique background, and strong technical skills will be valued. My previous experience as a high school science teacher has 
                        made me an expert at time-management, organization, and the ability to manage people. 
                

                    
                    </p>
                    <p>
                     When I am not working on code, I enjoy spending time with my family, playing guitar, and reading anything I can get my hands on.<br />
                        <img src={guitar} height="400" alt="seattle guitar" />
                    </p>
                </div>

                
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAmazon} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faPython} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;