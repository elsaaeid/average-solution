import React from 'react';
import './Experience.css';
import { GiSkills } from 'react-icons/gi';
import {Box} from '@mui/material';
import CarouselContainer from '../../../components/portfolio-components/experience-container/CarouselContainer';
import { useTranslation } from "react-i18next";


const Experience = ()=> {
	// Translation
	const { t } = useTranslation();
	
        return (
             <section id='experience'>
				<Box className='branch-container'>
					<GiSkills className='icon-branch' />
				</Box>
				<Box className="w-1/2 mb-4">
					<h5>{t("experience.experienceHave")}</h5>
					<h2>{t("experience.ourExperience")}</h2>
					<Box className="experience__container width-full">
						<CarouselContainer />
					</Box>
				</Box>
            </section> 
        )
}
export default Experience;