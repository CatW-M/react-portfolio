import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import profile from '../../assets/images/Profileyard.png';
import ContactAlert from './ContactAlert';
import ContactForm from './ContactForm';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';



const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({heading: '', message: ''});

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          
          <p>
           Please let me know if you have questions or just want to say "hello!"
          </p>
          {showAlert ? <ContactAlert
          alertContent={alertContent}
        setShowAlert={setShowAlert} /> : <ContactForm
        setAlertContent={setAlertContent}
      setShowAlert={setShowAlert} />}
        </div>
        <div className='image-wrap'>
            <div className='info-image'>
                <span>wheelermushlin@gmail.com</span>
            </div>
            <div className='profpic-container'>
            <img src={profile} height="500" alt="Cat W-M" />

            </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact