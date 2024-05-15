import React from 'react';
import './services.css';
import { FcServices } from 'react-icons/fc';
import {Box} from '@mui/material';
import CarouselContainer from '../../../components/portfolio-components/service-container/CarouselContainer';
import { useTranslation } from "react-i18next";


const Services = ()=>{
	// Translation
	const { t } = useTranslation();
        return (             
	    <section id='services'>
			<Box className='branch-container'>
				<FcServices className='icon-branch' />
			</Box>
			<Box className="mb-4 services-slider">
				<h5>{t("service.offer")}</h5>
				<h2>{t("service.Services")}</h2>
				<CarouselContainer />
			</Box>
        </section> 
        )
}
export default Services;