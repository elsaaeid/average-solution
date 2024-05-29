import React from 'react';
import Box from '@mui/material/Box';
import "./IntroHome.css"
import { useTranslation } from "react-i18next";
import items from "./cardProperties";
import ServiceButton from './ServiceButton';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material"; 


const IntroHome = ({btnHandling, btnState, setActiveNav}) => {
     // Translation
const { i18n } = useTranslation();
const theme = useTheme();
const colors = tokens(theme.palette.mode);
  

const servicesItem = items.map(item => {
  if(i18n.language == 'ar') {
    return({
      id: item.id,
      name: item.name_ar,
      design: item.design,
      paragraph: item.paragraph_ar,
      reviewService: item.reviewService_ar,
      reMaintenanceService: item.reMaintenanceService_ar,
      acceptService: item.acceptService_ar,
    })
  }
  return item;
});


  return (
    <Box className="intro-home w-full flex flex-col justify-center items-center">
      {
        servicesItem
        .map(
          (item, id) => 
        <Box key={id} className="Design-box-container w-full flex flex-col justify-center items-center">
      {
        (
          <Box id={item.id} className="Design-box-content front-card w-full item-property flex flex-col about__cards justify-center items-center">
            <Box class="overlay p-5 flex flex-col items-center width-full">
                <h4 
                style={{
                  color: colors.grey[500],
                  }}
                className="text-role mb-5">{item.name}</h4>
                <div className="flex flex-col justify-between items-center w-full">
                  <div className="design w-full">{item.design}</div>
                  <p 
                   style={{
                    color: colors.grey[500],
                    }}
                  className="design-para">{item.paragraph}</p>
                </div>
            </Box>
            <ServiceButton 
            item={item}
            btnHandling={btnHandling} 
            btnState={btnState} 
            setActiveNav={setActiveNav} 
            />
          </Box> 
        )
      }
        </Box>
         )
      }
    </Box>
  )
}

export default IntroHome