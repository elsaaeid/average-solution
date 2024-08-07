import React from "react";
import { useTranslation } from "react-i18next";
import featureItems from './featureItems';
import {Box} from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { IoIosArrowDown } from "react-icons/io";


const FeaturesContainer = ()=>{
      // Translation
const { i18n } = useTranslation();
const {t} = useTranslation();
// Theme Colors Mode
const theme = useTheme();
const colors = tokens(theme.palette.mode); 
  const items = featureItems.map(item => {
    if(i18n.language == 'ar') {
      return({
        id: item.id,
        featureImage: item.featureImage,
        featureTitle: item.featureTitle_ar,
        featureDesc: item.featureDesc_ar,
      })
    }
    return item;
  });
    return(
      <Box className="feature-section flex flex-col justify-center items-center">
        <Box 
          onClick={() => window.scrollTo(0, document.body.scrollHeight / 2)}
          className="element btn flex justify-center items-center">
            <IoIosArrowDown />
        </Box>
        <h1
        className="mt-5"
         style={{
          color: colors.grey[500],
        }}
        >{t("featureCaption")}</h1>
        <Box>
        {
        items
        .map(
          (item, index) => 
            <Box key={index} className="flex flex-col justify-center items-center">
            {
                (
                <Box className={`feature-item m-3 flex ${item.style} justify-center items-center`}>
                    <Box className="left-side w-1/2">
                        <img className="feature-image" src={item.featureImage} alt={item.featureTitle} />
                    </Box>
                    <Box className="right-side flex flex-col justify-center items-center w-1/2 p-5">
                        <h1
                        className="font-bold flex justify-center items-center mb-2 w-full"
                        >{item.featureTitle}</h1>
                        <p
                        className="flex justify-center items-center w-full"
                        >{item.featureDesc}</p>
                    </Box>
                </Box>
                )
            }
            </Box>
            )
             }
        </Box>
        </Box>
    )
}
export default FeaturesContainer;