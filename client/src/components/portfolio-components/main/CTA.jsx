import React from 'react';
import {Box} from '@mui/material';
import {NavLink} from "react-router-dom"

const CTA = ({ t, btnState, btnHandling })=>{
    return (
        <Box className='cta flex flex-col items-center'>
            <article className="introduction w-full flex flex-col justify-center items-center">
                <p>{t("homeContainer.introDesc")}</p>
                <div className="flex flex-col justify-center items-center">
                    <span className="mb-3 mt-3">{t("logoTitle")}</span>
                    <p>{t("homeContainer.introDesc2")}</p>
                </div>
            </article>
            <NavLink to="/ContactPortfolio" 
                underline="none"
                className={btnState === "thertlyActive" ? "btn btn-active" : "btn"}
                onClick={() =>btnHandling("thertlyActive")}
                >{t("letTalk")}</NavLink>
        </Box>
    )
};
export default CTA;

