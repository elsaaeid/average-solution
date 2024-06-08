import React from "react";
import ServiceButton from './ServiceButton';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material"; 
import Box from '@mui/material/Box';

const ServiceItem = ({
    id,
    item,
})=>{
  
  // Theme Color Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


    return(
        <Box key={id} id={item.id} className="Design-box-content front-card w-full item-property flex flex-col about__cards justify-center items-center">
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
        />
      </Box> 
    )
}
export default ServiceItem;