import React from 'react';
import {Box} from '@mui/material';
import {NavLink} from "react-router-dom"

const CTA = ({ t, btnState, btnHandling })=>{
    return (
        <Box className='cta mt-5 h-full flex flex-col justify-center items-center'>
            <article className="introduction w-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <span className="mt-2">{t("homeContainer.background")}</span>
                </div>
                <p>{t("homeContainer.introDesc")}</p>
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

