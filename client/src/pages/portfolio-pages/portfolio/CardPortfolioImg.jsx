import React from 'react';
import {CardPortfolio} from "./CardPortfolio";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { useTranslation } from "react-i18next";



export const CardPortfolioImg = ( props )=>{
    const { product, name, category, liveDemo, shortenText } = props.item;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    	// Translation
	const { t } = useTranslation();
    return (
        <CardPortfolio 
            portfolioView={product ? (product?.image ? (
                <img
                  src={product.image.filePath}
                  alt={product.image.fileName}
                />
              ) : (
                <p style={{
                  color: colors.grey[100],
                }}>{t("noImg")}</p>
              ) ) : null}
            name={name} category={category} liveDemo={liveDemo}
            shortenText={shortenText}
            firstBtn="Live Demo"
            product={product}
        />
    )

}
