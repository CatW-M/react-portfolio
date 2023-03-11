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
import guitar from '../../assets/images/guitar.png';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

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
          <div>
            <p>
              As a software engineer with a background in the sciences and
              education, I have strong collaboration, mentorship, and
              communication skills. I am adept at translating complex technical
              concepts into understandable language, making me an asset to any
              team. My expertise lies in JavaScript, specifically Node.js, but I
              am comfortable with learning and utilizing different
              languages/frameworks to meet clients' needs.
            </p>

            <p align="LEFT">
              With a proven track record in JavaScript, Python, PostgreSQL,
              MongoDB, AWS, RESTful Web Services, API Integration, Github, and
              pedagogical best practices, I thrive in team environments and
              enjoy sharing knowledge. I have a strong work ethic, and I am
              resourceful and capable of problem-solving. My previous experience
              in education has instilled in me excellent time-management,
              organizational, and people-management skills.
            </p>
            <p>
              I am seeking an organization where my unique background and
              technical skills will be valued. If you hire me, I will bring my
              dedication, skills, and commitment to delivering top-notch
              results. When I'm not working on code, I enjoy spending time with
              my family, playing guitar, and reading.
              <br />
            </p>
          </div>
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
            <p align="RIGHT">
              <img
                src={guitar}
                height="100px"
                alt="seattle guitar"
                className="image-about"
              />
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
