import React, { useContext } from 'react';
import {Box} from "@mui/material";
import { useTranslation } from "react-i18next";
import {NavLink} from "react-router-dom";
import { Context } from '../../../context/Context';


const IntroBtn = ()=>{
    // App Context
    const { btnState, btnHandling } = useContext(Context);
    // Translation
    const { t } = useTranslation();
    return(
            <Box className="flex justify-around items-center mt-3 w-1/2">    
                <NavLink 
                    to="/register" 
                    underline="none"
                    className={btnState === "thertlyActive" ? "btnX" : "btnX"}
                    onClick={() =>btnHandling("thertlyActive")}
                    >{t("homeContainer.btnLeft")}
                </NavLink>
                <NavLink 
                    to="/home" 
                    underline="none"
                    className={btnState === "thertlyActive" ? "btn" : "btn"}
                    onClick={() =>btnHandling("thertlyActive")}
                    >{t("homeContainer.btnRight")}
                </NavLink>
            </Box>
            )
        }
export default IntroBtn;