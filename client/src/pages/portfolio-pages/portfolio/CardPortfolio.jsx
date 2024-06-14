import React from 'react';
import HeartRating from './HeartRating';
import { IoIosArrowUp } from "react-icons/io";
import {Box, Typography, useTheme, IconButton} from '@mui/material';
import {NavLink} from "react-router-dom";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";


export const CardPortfolio = ( { 
    id,
    key,
    rotate,
    product, 
    currentItems,
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
        <Box className="portfolio__item-details mt-3 flex flex-col justify-center items-center w-full">
            <span className='flex flex-col justify-between w-full'>
                <Typography variant="h6" component="h6" className="portfolio__item-name flex justify-center items-center w-full">
                {shortenText(name, 16)}
                </Typography>
                <HeartRating 
                    product={product} 
                    currentItems={currentItems} 
                />
            </span>
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
                <span className='flex flex-row justify-between'>
                    <h7 className="found">Created at</h7>
                    <Typography className="category" variant='h7'>{shortenText(product.createdAt, 16)}</Typography>
                </span>
            </Box>
            )
            }
        </article>
    )

}