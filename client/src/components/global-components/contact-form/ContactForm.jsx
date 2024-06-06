import React from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ContactForm = () => {
  	// Translation
    const { t } = useTranslation();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0wl59ed', 'template_5vc4rg7', e.target, 'cnPFS7uNaxn0ShtpF')
      .then((result) => {
        toast("The message has been sent successfully");
        console.log(result.text);
      }, (error) => {
        toast(error);
        console.log(error.text);
      });
      e.target.reset();
      };
  
  return (
    <form className="contact-form w-full" onSubmit={sendEmail}>
      <input
        className="mt-3"
        type="text" 
        name="name" 
        placeholder="Your Name" 
        required
                />
      <input
        className="mt-3"
        type="email" 
        name="email" 
        placeholder="Your Email" 
        required
                />
      <input 
        className="mt-3"
        type="text"
        name="subject" 
        placeholder="Subject" 
        required />
      <textarea 
        className="mt-3"
        name="message" 
        rows="7" 
        placeholder="Your Message" 
        required ></textarea>	
      <button
        className="btn btn-primary mt-3"
        id='submit' type="submit">{t("contact.sendMessage")}</button>
        <ToastContainer />
  </form>
  );
};

export default ContactForm;











