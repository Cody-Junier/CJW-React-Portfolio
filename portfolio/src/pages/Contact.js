import React , { useRef }from "react";
import emailjs from '@emailjs/browser';


export default function Contact(){
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
    return(
        <div>
            <h2>Contact</h2>
            <div>
                <h3>Send an Email</h3>
                <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}