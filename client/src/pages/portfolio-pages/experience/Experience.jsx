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
			<div className='section-content w-full'>
				<Box className='branch-container'>
					<GiSkills className='icon-branch' />
				</Box>
				<Box className="mb-4">
					<h5>{t("experience.experienceHave")}</h5>
					<h2>{t("experience.ourExperience")}</h2>
					<Box className="experience__container">
						<CarouselContainer />
					</Box>
				</Box>
            </div> 
        )
}
export default Experience;