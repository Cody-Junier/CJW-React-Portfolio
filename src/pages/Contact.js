import React , { useRef, useState }from "react";
import emailjs from '@emailjs/browser';
import { validateEmail } from "../utils/helpers";

export default function Contact(){
  const [formState, setFormState] = useState({ user_name: '', user_email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_qhiehba', 'contact_form', form.current, 'yX9u3Bwpra2L1UfB3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
  };

  const handleChange = (e) => {
      if (e.target.name === 'user_email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
              setErrorMessage('Your email is invalid.');
          } else {
              setErrorMessage('');
          }
      } else {
          if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
          } else {
              setErrorMessage('');
          }
      }
      if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
      }
  };

  return(
      <div className="contactPage">
          <div className="contactContent">
              <h2>Send me an Email</h2>
              <form id="contactform" ref={form} onSubmit={sendEmail}>
                  <input type="text" name="user_name" className="form" placeholder="Name" onBlur={handleChange} />
                  <input type="email" className="form" name="user_email" placeholder="Email" onBlur={handleChange}/>
                  <textarea name="message" className="form" placeholder="Message" onBlur={handleChange} />
                  {errorMessage && (
                      <div>
                          <p className="error-text">{errorMessage}</p>
                      </div>
                  )}
                  <input type="submit" value="Send" />
              </form>
          </div>
      </div>
  )
}