import React from 'react';
import { Box, Typography } from "@mui/material";

export const SubBanner = ({SubBannerBg, SubBannerColorTitle, SubBannerTitle, SubBannerColorSpan, SubBannerSpan, SubBannerColorParaOne, SubBannerParaOne, SubBannerColorParaTwo, SubBannerParaTwo, SubBannerAlt, SubBannerImg, SubBannerBgButton, SubBannerColorButton, SubBannerTitleButton}) => {
  
    return (
    <Box
        backgroundColor= {SubBannerBg}
        className="flex justify-between mb-4 flex-row items-center p-2 h-full"
        >
        <Box  
        width="50%"
        className="flex flex-col justify-around font-bold text-xs h-full">
            <Typography
                variant="h5"
                color={SubBannerColorTitle}
                >
                {SubBannerTitle}
            </Typography>
            <Box
            className="flex flex-col"
            >
            <Typography
            variant="span"
            fontWeight="bold"
            fontSize="12px"
            color={SubBannerColorSpan}
            >
            {SubBannerSpan}
            </Typography>
            <Typography
            variant="p"
            fontWeight="bold"
            color={SubBannerColorParaOne}
            >
            {SubBannerParaOne}
            </Typography>
            </Box>
            <Typography
            variant="p"
            fontSize="11px"
            color={SubBannerColorParaTwo}
            >
            {SubBannerParaTwo}
            </Typography>
        </Box>
        <Box
        width="100%"
        className="flex justify-between items-center p-2"
        >
        <img
            alt={SubBannerAlt}
            width="100%"
            src={SubBannerImg}
        />
        </Box>
    </Box>
  )
}
