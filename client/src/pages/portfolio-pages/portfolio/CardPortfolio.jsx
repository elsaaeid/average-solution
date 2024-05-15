import React, { useState } from 'react';
import HeartRating from './HeartRating';
import {RiCloseFill} from "react-icons/ri";
import {Box, Typography, IconButton} from '@mui/material';
import {NavLink} from "react-router-dom";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";



export const CardPortfolio = ( { product, portfolioView, name, category, liveDemo, firstBtn, shortenText } )=>{
    const [anchorEl, setAnchorEl] = useState(null);
    
	// Translation
	const { t } = useTranslation();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <article className='portfolio__item'>
            <Box className="portfolio__item-image">
                {portfolioView}
            </Box>
            <Box className="portfolio__item-details ">
                <Typography variant='h6'>{shortenText(name, 16)}</Typography>
                <NavLink
                className='view-btn btn' 
                underline="none"
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >{t("Portfolio.viewDetails")}
                </NavLink>
            </Box>
            {
                anchorEl &&
            <Box className={anchorEl ? 'details_Active details flex flex-col justify-center items-center' : 'details flex flex-col justify-center items-center'}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                <Box className="portfolio__item-icon" onClick={handleClose}>
                    <IconButton><RiCloseFill /></IconButton>
                </Box>
                <Box className="portfolio__item-details ">
                    <div
                    dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.description),
                    }}
                    ></div>
                </Box>
                <Box>{t("Portfolio.foundIn")}<p>{category}</p></Box>
                <Box className="portfolio__item-cta ">
                    <NavLink to={liveDemo} 
                    underline="none"
                    className="btn btn-primary"
                    >{firstBtn}
                    </NavLink>
                </Box>
                <IconButton><HeartRating /></IconButton>
            </Box>
            }
        </article>
    )

}