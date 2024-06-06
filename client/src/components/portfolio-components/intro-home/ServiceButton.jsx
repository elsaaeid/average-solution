import React from 'react';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import { useTranslation } from "react-i18next";
import ServiceShowToggle from './ServiceShowToggle';
  
const ServiceButton = ({
    btnState, 
    item,
    handleCheckboxChange,
    selectedServices,
  }) => {


    	// Translation
	const { t } = useTranslation();



  const AddToCart = ()=>{
    handleCheckboxChange(item.id);
  }


  return (
    <Box className='show-service-icons w-full mt-3 flex flex-row justify-around items-initial'>
      <Box class="overlay p-3 flex flex-row items-center justify-between">
          <ServiceShowToggle 
            btnState={btnState}
            item={item}
          />
        <Link onClick={AddToCart} className='btn'>
        {selectedServices.includes(item.id) ? t("homeContainer.removeFromCart") : t("homeContainer.addToCart")}
        </Link>
      </Box>
    </Box>
  )
}

export default ServiceButton