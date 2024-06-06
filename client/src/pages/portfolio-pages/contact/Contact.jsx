import React from "react"
import './contact.css';
import {MdContactPhone} from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';
import {Box} from '@mui/material';
import { useTranslation } from "react-i18next";
import ContactForm from "../../../components/global-components/contact-form/ContactForm"
import ContactOption from "./ContactOption";



const Contact = ()=> {
		// Translation
		const { t } = useTranslation();
        return (
            <section id='contact'>
				<Box className='branch-container'>
					<MdContactPhone className='icon-branch' />
				</Box>
				<h5>{t("contact.getInTouch")}</h5>
				<h2>{t("contact.contactMe")}</h2>
				<Box className="contact__container">
					<Box className="contact__options">
						<ContactOption />
					</Box>
					{/* END OF CONTACT OPTOINS */}
					<ContactForm />
				</Box>
            </section> 
        )
}
export default Contact;