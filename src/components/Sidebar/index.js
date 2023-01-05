import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import Logo from '../../assets/images/Logo1.png';
import LogoSubTitle from '../../assets/images/Sublogo.png';
import Resume from '../../assets/images/CwmResume010523.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHome,
  faUser,
  faComputer,
  faBars,
  faClose,
  faCode,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/' onClick={() => setShowNav(false)}>
        <img src={Logo} alt="CWM Logo" />
        <img className="sub-logo" src={LogoSubTitle} alt="CWM Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink end activeclassname="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink end activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink end activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faComputer} color="#4d4d4e" />
        </NavLink>
        <NavLink end activeclassname="active" className="skills-link" to="/skills" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink end activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <a activeclassname="active" className="resume-link" href={Resume} download onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faDownload} color="#4d4d4e" />
        </a>
        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size='3x' className='close-icon' />
        
      </nav>
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
        color="#ffd700"
        size="3x"
        className='hamburger-icon' />
    </div>
  )
}
export default Sidebar;