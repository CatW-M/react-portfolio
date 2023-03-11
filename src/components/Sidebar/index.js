import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import Resume from '../../assets/images/CwmResume010523.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHome,
  faUser,
  faComputer,
  faBars,
  faClose,
  faCode,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <div className="separate">
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="CWM Logo" />
        </Link>
      </div>
      <div className="separate">
        <nav className={showNav ? 'mobile-show' : ''}>
          <div className="navLink">
            <NavLink
              end
              activeclassname="active"
              to="/"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink
              end
              activeclassname="active"
              className="about-link"
              to="/about"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink
              end
              activeclassname="active"
              className="portfolio-link"
              to="/portfolio"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faComputer} color="#4d4d4e" />
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink
              end
              activeclassname="active"
              className="skills-link"
              to="/skills"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
            </NavLink>
          </div>
          <div className="navLink">
            <NavLink
              end
              activeclassname="active"
              className="contact-link"
              to="/contact"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </div>
          <div className="navLink">
            <a
              activeclassname="active"
              className="resume-link"
              href={Resume}
              download
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faDownload} color="#4d4d4e" />
            </a>
            <FontAwesomeIcon
              onClick={() => setShowNav(false)}
              icon={faClose}
              color="#ffd700"
              size="3x"
              className="close-icon"
            />
          </div>
        </nav>
      </div>
      <div className="separate">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/compsciwheeler"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CatW-M"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#001d46"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </div>
  );
};
export default Sidebar;
