import React from 'react';
import {Box} from "@mui/material";
import landingImg from "../../../assets/landing.gif";
import "./LandingContainer.css";
import { useTranslation } from "react-i18next";
import {NavLink} from "react-router-dom"
import FeaturesContainer from "./FeaturesContainer";
import HeaderBar from "../../global-components/header-bar/HeaderBar";

export default function LandingContainer({ btnState, btnHandling }) {
// Translation
		const { t } = useTranslation();
  return (
    <Box className="landing-container flex flex-col items-center justify-content-center">
        <HeaderBar 
            />
        <div id="home" className="intro-section mt-5 flex flex-col justify-center items-center">
            <h1>{t("logoTitle")}</h1>
            <p className='mt-3'>{t("homeContainer.introDesc")}</p>
            <Box className="flex justify-around items-center mt-3 w-1/2">    
                <NavLink 
                    to="/register" 
                    underline="none"
                    className={btnState === "thertlyActive" ? "btnX" : "btnX"}
                    onClick={() =>btnHandling("thertlyActive")}
                    >{t("homeContainer.btnLeft")}</NavLink>
                    <NavLink 
                    to="/home" 
                    underline="none"
                    className={btnState === "thertlyActive" ? "btn" : "btn"}
                    onClick={() =>btnHandling("thertlyActive")}
                    >{t("homeContainer.btnRight")}</NavLink>
            </Box>
        </div>
        <div id="about" className="about-section mt-5 flex flex-col justify-center items-center">
            <h1>{t("About")}</h1>
            <p className='mt-3 p-3 w-1/2'>{t("homeContainer.aboutDesc")}</p>
        </div>
        <div id="shows" className="flex landing">
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
        </div>
        <FeaturesContainer />
    </Box>
  );
}