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
                        I have always enjoyed breaking big, complex things down into smaller, more manageable pieces. I am a science-minded
                        individual who values sound logic, data, and community. I am a Google Ninja and a JavaScript nerd.
                    </p>
                    <p align="LEFT">
                        I am not afraid to try new things, like building this portfolio app. I followed an excellent tutorial by <a
                            href="https://www.youtube.com/watch?v=ESHaail1eGc"
                            target="_blank"
                            rel="noreferrer"
                        >Slobodan</a> to create this. If I don't know something now, I will find the resources to get the job done or problem solved. I am continually learning and teaching new technologies.
                    </p>
                    <p>
                        When I am not working on code, I enjoy spending time with my family and reading anything I can get my hands on.
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