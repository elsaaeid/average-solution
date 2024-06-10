import React from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { Box, Typography } from "@mui/material";

export const FullBanner = ({FullBannerBg, FullBannerColorTitle, FullBannerTitle, FullBannerColorParaOne, FullBannerParaOne,FullBannerAlt, FullBannerImg, FullBannerBgButton, FullBannerColorButton, FullBannerTitleButton}) => {
    // Theme Colors Mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
 
    return (
    <Box
        backgroundColor= {FullBannerBg}
        className="flex justify-between mb-4 flex-row items-center p-2 h-full"
        >
        <Box 
        width="50%"
        className="flex flex-col justify-around font-bold text-xs h-full">
            <Typography
                variant="h5"
                color={FullBannerColorTitle}
                >
                {FullBannerTitle}
            </Typography>
            <Box
            className="flex flex-col"
            >
            <Typography
            variant="p"
            color={FullBannerColorParaOne}
            >
            {FullBannerParaOne}
            </Typography>
            </Box>
            <Box
                width="80%"
                className="hover:bg-slate-500 rounded-full text-center text-xs font-bold p-2 mt-2 cursor-pointer"
                sx={{
                    backgroundColor: colors.primary[100],
                    color: colors.primary[900]
                }}
                >
                <Typography variant="button">
                    {FullBannerTitleButton}
                </Typography>
            </Box>
        </Box>
        <Box
        width="50%"
        className="flex justify-between items-center p-2"
        >
        <img
            alt={FullBannerAlt}
            width="100%"
            src={FullBannerImg}
        />
        </Box>
    </Box>
  )
}
