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
        <div>
            <h2>Contact</h2>
            <div>
                <h3>Send an Email</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <label  >Name</label>
                    <input type="text" name="user_name"  onBlur={handleChange} />
                    <label > Email</label>
                    <input type="email" name="user_email" onBlur={handleChange}/>
                    <label >Message</label>
                    <textarea name="message" onBlur={handleChange} />
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