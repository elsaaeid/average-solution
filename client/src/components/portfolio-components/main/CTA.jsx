import React, { useContext } from 'react';
import {Box} from '@mui/material';
import {NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Context } from '../../../context/Context';


const CTA = ()=>{
    // App Context
    const { btnState, btnHandling } = useContext(Context);
    // Translation
	const { t } = useTranslation();
    return (
        <Box className='cta mt-5 h-full flex flex-col justify-center items-center'>
            <article className="introduction w-full flex flex-col justify-center items-center">
                <p>{t("main.introDesc")}</p>
            </article>
            <NavLink to="/contact" 
                underline="none"
                className={btnState === "thertlyActive" ? "btn btn-active" : "btn"}
                onClick={() =>btnHandling("thertlyActive")}
                >{t("letTalk")}</NavLink>
        </Box>
    )
};
export default CTA;

