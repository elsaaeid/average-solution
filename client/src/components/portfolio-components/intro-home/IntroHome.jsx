import React from 'react';
import Box from '@mui/material/Box';
import "./IntroHome.css"
import ServiceItem from './ServiceItem';


const IntroHome = ({
  btnHandling, 
  btnState, 
  setActiveNav,
  handleCheckboxChange,
  servicesItem,
  selectedServices,
}) => {


  return (
    <Box className="intro-home w-full flex flex-col justify-center items-center">
      {
        servicesItem
        .map(
          (item, id) => 
        <Box className="Design-box-container w-full flex flex-col justify-center items-center">
      {
        (
          <>
          <ServiceItem 
            key={id}
            item={item}
            setActiveNav={setActiveNav}
            btnHandling={btnHandling}
            btnState={btnState}
            handleCheckboxChange={handleCheckboxChange}
            selectedServices={selectedServices}
            />
          </>
        )
      }
        </Box>
         )
      }
    </Box>
  )
}

export default IntroHome