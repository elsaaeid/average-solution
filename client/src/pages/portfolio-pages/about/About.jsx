import React from 'react';
import './About.css';
import {SiAboutdotme} from "react-icons/si";
import CarouselContainer from '../../../components/portfolio-components/about-container/CarouselContainer';
import { useTranslation } from "react-i18next";


const About = ()=> {
		// Translation
		const { t } = useTranslation();
        return (
            <section id='about'>
				<div className='branch-container'>
					<SiAboutdotme className='icon-branch' />
				</div>
					<div className="p-3 about__container">
					<div className='head-about mb-5'>
						<h5>{t("about.getToKnow")}</h5>
						<h2>{t("about.aboutUs")}</h2>
						<p>{t("about.aboutUsPara")}</p>
					</div>
					<div className="about__content flex flex-col justify-center items-center">
						<CarouselContainer />
						<a href="/contact" className="aboutA btn btn-primary">{t("letTalk")}</a>
					</div>
					</div>
            </section> 
        )
}
export default About;