import React, { useContext } from 'react';
import {Box} from "@mui/material";
import "./LandingContainer.css";
import HeaderBar from "../header-bar/HeaderBar";
import LandingContent from './LandingContent';
import landingImg from "../../../../assets/landing.gif";
import { useTranslation } from "react-i18next";
import {NavLink} from "react-router-dom";
import FeaturesContainer from "./FeaturesContainer";
import IntroBtn from './IntroBtn';
import BackToTopButton from "../../goToTopButton/BackToTopButton";
import { Context } from '../../../../context/Context';


export default function LandingContainer() {

    // App Context
    const { backToTop } = useContext(Context);
    
    // Translation
    const { t } = useTranslation();

    const landingItems = [
        {
            id: "#home",
            landingComponent:  
            <Box id="home" className="intro-section w-full mt-5 flex flex-col justify-center items-center">
                <h1>{t("logoTitle")}</h1>
                <p className='mt-3'>{t("homeContainer.introDesc")}</p>
                <IntroBtn />
            </Box>,
        },
        {
            id: "#about",
            landingComponent: 
            <Box id="about" className="about-section w-full mt-5 flex flex-col justify-center items-center">
                <h1>{t("About")}</h1>
                <p className='mt-3 p-3 w-1/2'>{t("homeContainer.aboutDesc")}</p>
            </Box>
            ,
        },
        {
            id: "#shows",
            landingComponent: 
            <Box id="shows" className="flex flex-col w-full">
                <Box className="flex landing">
                    <div className="left-content">
                        <img src={landingImg} alt="landingImg" />
                    </div>
                    <div className="right-content flex flex-col justify-center align-items-center">
                        <h2 className='m-3'>{t("landingContainer.title")}</h2>
                        <p className='p-2'>{t("landingContainer.article")}</p>
                        <NavLink to="/contact" 
                            underline="none"
                            className="btn mt-3 mb-3"
                            >{t("landingContainer.btn")}
                        </NavLink>
                    </div>
                </Box>
                <FeaturesContainer />
            </Box>
            ,
        },
    ];
 
  return (
    <Box className="landing-container w-full flex flex-col items-center justify-content-center">
        <BackToTopButton backToTop={backToTop} />
        <HeaderBar landingItems={landingItems} />
        <LandingContent landingItems={landingItems} />
    </Box>
  );
}