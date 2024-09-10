import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


/* emailjs.send("service_puvq2v1","template_noq69rv",{
    user_name: ",m,n",
    user_email: ",,n,",
    message: ",n,n",
    }); */
export const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    const serviceId = 'service_puvq2v1';
    const templateId = 'template_noq69rv';
    const publicKey = 'm2y7s6CT_76yIlrb2';

    emailjs
      .sendForm('service_puvq2v1','template_noq69rv', form.current, {
        publicKey: 'm2y7s6CT_76yIlrb2',
      })
      .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log("Failed" , error.text)
        }
    );
    
    
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email"  />
      <label>Message</label>
      <textarea name="message" cols="30" rows="10" />
      <button type="submit" value="Send">Send</button>
    </form>
  );
};