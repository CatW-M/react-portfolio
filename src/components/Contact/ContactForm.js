import { useState } from "react";
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import './index.scss';

const ServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const UserId = process.env.REACT_APP_EMAILJS_USER_ID;

init('REACT_APP_EMAILJS_USER_ID');

const ContactForm = ({ setAlertContent, setShowAlert }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      ServiceId,
      TemplateId,
      formData,
      UserId)
      .then(
        (result) => {
          setFormData({
            email: '',
            name: '',
            subject: '',
            message: ''
          })
          setAlertContent({
            heading: "Thank you for contacting me.",
            message: "I will respond to your message as soon as I can."
          })
          setShowAlert(true)
        }, (error) => {
          setAlertContent({
            heading: "Something went wrong.",
            message: 'Failed to send the message, please try again'
          })
          setShowAlert(true)
        });
  };

  return (
    <div className="contact-form">
    <form>
      <ul>
        <li className="half">
          <input placeholder="Name" type="text" name="name" onChange={handleChange}
            value={formData.name} />
        </li>
        <li className="half">
          <input
            placeholder="name@example.com"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </li>
        <li>
          <input
            placeholder="Subject"
            type="text"
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          />
        </li>
        <li>
          <textarea
            placeholder="Message"
            name="message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </li>
        <li>
          <input type="submit" className="flat-button" value="SEND" onClick={sendEmail} />
        </li>
      </ul>
    </form>
  </div>
  )
}

export default ContactForm;