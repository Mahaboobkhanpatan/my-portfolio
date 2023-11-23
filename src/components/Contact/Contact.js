import React, { useRef } from 'react'
import './contact.css'
import Facebook from '../../assets/facebook.logo.webp'
import Instagram from '../../assets/instagram.logo.avif'
import Twitter from '../../assets/twitter.logo.jpg'
import LinkedIn from '../../assets/linkedin.logo.webp'
import emailjs from '@emailjs/browser';

const Contact=()=> {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j8a57rm', 'template_om1pipb', form.current, '9aZD2nZmrHz4SK_qsoRCF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact-section'>
        <h1 className='contact-heading'>Contact Me</h1>
        <span className='contact-span'> Please fill out the form below to discuss any work oportunities</span>
        <form className='contact-form' ref={form} onSubmit={sendEmail} >
            <div className='name-input'>
            <input type='text' placeholder='your name' className='input-field hover' name='your_name'/>
            </div>
            <div className='email-input'>
            <input type='email' placeholder='Your email' className='input-field hover'  name='your_email'/>
            </div>
            <div className='message'>
               <textarea className='message-input hover'  name='message'>Your Message</textarea>
            </div>
            <button type='submit' value="send"  className='submit-button '>Submit</button>
            <div className='links'>
            <img src={Facebook} alt='facebook logo' className='link'/>
            <img src={Instagram} alt='insta logo' className='link'/>
            <img src={Twitter} alt='twitter logo' className='link'/>
            <img src={LinkedIn} alt='linkedIn logo' className='link'/>
            </div>
          </form>
          
        
    </section>
  )
}

export default Contact
