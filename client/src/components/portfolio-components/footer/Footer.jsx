import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {AiFillBehanceCircle} from 'react-icons/ai';
import {GrYoutube} from 'react-icons/gr';
import {BsMedium} from 'react-icons/bs';
import {Box, Link} from '@mui/material';
import {useNavigate} from "react-router-dom"
import { useTranslation } from "react-i18next";


const Footer = ()=> {
        // Translation
	const { t } = useTranslation();
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
		};
	return (
			<footer id="footer">
			<Link onClick={goHome} underline="none">
			<h1 className='mb-5'>{t("logoTitle")}</h1>
			</Link>

		<Box className="permalinks flex flex-col justify-center items-center">
			<Box>
				<Link href="#" underline="none">{t("footer.footerSec1")}</Link>
				<Link href="#about" underline="none">{t("footer.footerSec2")}</Link>
				<Link href="#experience" underline="none">{t("footer.footerSec3")}</Link>
			</Box>
			<Box>
				<Link href="#services" underline="none">{t("footer.footerSec4")}</Link>
				<Link href="#portfolio" underline="none">{t("footer.footerSec5")}</Link>
				<Link href="#contact" underline="none">{t("footer.footerSec6")}</Link>
			</Box>
		</Box>

		<Box className="footer__socials flex flex-col justify-center items-center">
			<Box className="footer__socials_icons flex flex-row justify-center items-center"> 
				<Link href="https://www.facebook.com/saaed.sadaoy" underline="none"><FaFacebookF /></Link>
				<Link href="https://www.instagram.com/saidsadaoy___/" underline="none"><FiInstagram /></Link>
				<Link href="https://twitter.com/ElsaaeidEllithy" underline="none"><IoLogoTwitter /></Link>
				<Link href="https://wa.me/+0201028496209" underline="none"><FaWhatsapp /></Link>
			</Box>
			<Box className="footer__socials_icons flex flex-row justify-center items-center">
				<Link href="https://www.linkedin.com/in/elsaaeid-ellithy-9017811b2/" underline="none"><BsLinkedin /></Link>
				<Link href="https://github.com/elsaaeid" underline="none"><FaGithub /></Link>
				<Link href="https://www.behance.net/elsaeedellisy1" underline="none"><AiFillBehanceCircle /></Link>
				<Link href="https://www.youtube.com/channel/UClTOYMRSDn_Szer95hVI8WQ" underline="none"><GrYoutube /></Link>
			</Box>
			<Box className="footer__socials_icons flex flex-row justify-center items-center">
				<Link href="https://medium.com/@saidsadaoy" underline="none"><BsMedium /></Link>
			</Box>
		</Box>

		<Box className="footer__copyright">
			<small>&copy; {t("footer.footerCpyRight")}</small>
		</Box>
		</footer> 
	)
}
export default Footer;