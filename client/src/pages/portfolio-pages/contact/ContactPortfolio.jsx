import React from "react"
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {MdContactPhone} from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';
import {Box, Link} from '@mui/material';
import { useTranslation } from "react-i18next";
import Contact from "../../dashboard-pages/contact/index"



const ContactPortfolio = ()=> {
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
				<article className="contact__option">
					<MdOutlineEmail className="contact__option-icon" />
					<h4>{t("contact.Email")}</h4>
					<h3>saidsadaoy@gmail.com</h3>
					<Link href="mailto:saidsadaoy@gmail.com" target="_blank">{t("contact.sendMessage")}</Link>
				</article>
				<article className="contact__option">
					<RiMessengerLine className="contact__option-icon" />
					<h4>{t("contact.Messenger")}</h4>
					<h5>{t("logoTitle")}</h5>
					<Link href="https://m.me/saaed.sadaoy" target="_blank">{t("contact.sendMessage")}</Link>
					</article>
				<article className="contact__option">
					<BsWhatsapp className="contact__option-icon" />
					<h4>{t("contact.WhatsApp")}</h4>
					<h5>+20 01028496209</h5>
					<Link href="https://wa.me/+0201028496209" target="_blank">{t("contact.sendMessage")}</Link>
					</article>
					</Box>
				{/* END OF CONTACT OPTOINS */}
				<Contact />
				</Box>
            </section> 
        )
}
export default ContactPortfolio;