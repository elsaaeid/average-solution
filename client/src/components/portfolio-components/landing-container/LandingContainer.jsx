import React, { useState, useEffect } from 'react';
import {Box} from "@mui/material";
import landingImg from "../../../assets/landing.gif";
import "./LandingContainer.css";
import { useTranslation } from "react-i18next";
import {NavLink} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';




export default function LandingContainer() {
    const [landingState, setLandingState] = useState(false);

    const handleClose = () => {
        setLandingState(false);
    };

    useEffect(()=>{
        setTimeout(function(){
          setLandingState(true);
       }, 9000);
      }, []);
// Translation
		const { t } = useTranslation();
  return (
    <Box className={landingState ? "landing-container flex flex-col items-center justify-content-center landingOpened" : "landing-container flex flex-col items-center justify-content-center landingClosed"}>
        <CloseIcon className="landing-close-icon m-5 cursor-pointer" onClick={handleClose} />
        <Box className="flex landing">
            <div className="left-content">
                <img src={landingImg} alt="landingImg" />
            </div>
            <div className="right-content flex flex-col justify-center align-items-center">
                <h2 className='m-3'>{t("landingContainer.title")}</h2>
                <p className='p-2'>{t("landingContainer.article")}</p>
                <NavLink to="/ContactPortfolio" 
                    underline="none"
                    className="btn mt-3 mb-3"
                    onClick={handleClose}
                    >{t("landingContainer.btn")}
                </NavLink>
            </div>
        </Box>
    </Box>
  );
}