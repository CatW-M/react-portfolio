import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import profile from '../../assets/images/Profileyard.png';

import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
const ServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const UserId = process.env.REACT_APP_EMAILJS_USER_ID;


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm({ ServiceId }, { TemplateId }, form.current, { UserId })
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

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
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
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