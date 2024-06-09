import React from 'react';
// import HeartRating from './HeartRating';
import { IoIosArrowUp } from "react-icons/io";
import {Box, Typography, useTheme} from '@mui/material';
import {NavLink} from "react-router-dom";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";


export const CardPortfolio = ( { 
    id,
    key,
    rotate,
    product, 
    handleViewDetails, 
    selectedProduct,
    name, 
    category, 
    liveDemo, 
    shortenText
} )=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
	// Translation
	const { t } = useTranslation();
    return (
        <article key={key} className='portfolio__item mb-3'>
        <Box className="portfolio__item-image">
            {product ? (product?.image ? (
            <img
                src={product.image.filePath}
                alt={product.image.fileName}
            />
            ) : (
            <p style={{
                color: colors.grey[100],
                textAlign: "center",
            }}>No image set for this product</p>
            ) ) : null}
        </Box>
        <Box className="portfolio__item-details ">
            <Typography variant='h6'>{shortenText(name, 16)}</Typography>
            <NavLink
            className='view-btn btn flex justify-center items-center' 
            underline="none"
            onClick={handleViewDetails}
            >
                <span>{t("portfolio.viewDetails")}</span>
                <IoIosArrowUp 
                     style={{
                        color: colors.grey[500],
                    }}
                    className= {rotate === id ? "arrowExplore" : "arrowExplore toggled"} />
            </NavLink>
        </Box>
            {
            selectedProduct === id &&
            (<Box className={selectedProduct === id ?
                'details_Active details flex flex-col justify-center items-center' 
                : 'details flex flex-col justify-center items-center'}>
                    <div
                    className="portfolio__item-details"
                    dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.description),
                    }}
                    ></div>
                <Box className="category-content flex"><span className="found">{t("portfolio.foundIn")}</span><p className="category">{category}</p></Box>
                <Box className="portfolio__item-cta ">
                    <NavLink to={liveDemo} 
                    underline="none"
                    className="btn btn-primary"
                    >{t("portfolio.demoLive")}
                    </NavLink>
                </Box>
                {/* <IconButton><HeartRating /></IconButton> */}
            </Box>)
            }
        </article>
    )

}