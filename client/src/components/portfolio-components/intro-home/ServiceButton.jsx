import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {SiCodereview} from "react-icons/si"
import Box from '@mui/material/Box';
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
  
const ServiceButton = ({
    btnState, 
    item,
    handleCheckboxChange,
    selectedServices,
  }) => {
  const [btnReplace, setBtnReplace] = useState(true);

    	// Translation
	const { t } = useTranslation();
  let location = useLocation();
  useEffect(()=> {

    if(location.pathname === "/") {
        setBtnReplace(true);
    }
    else if (location.pathname === `/service/${item.id}`) {
        setBtnReplace(false);
    }
  }, [location.pathname, item.id]);


  const AddToCart = ()=>{
    handleCheckboxChange(item.id);
  }


  return (
    <Box className='show-service-icons w-full mt-3 flex flex-row justify-around items-initial'>
      <Box class="overlay p-3 flex flex-row items-center justify-between">
          <Link
            to={btnReplace ? `/service/${item.id}` : "/"}
            underline="none"
            className={btnState === "reviewActive" ? "btn btn-active flex flex-row items-center" : "btn flex flex-row items-center"}
            >
            {
              btnReplace ?
            (<div 
              className='flex flex-row items-center justify-content-evenly'
              onClick={ btnReplace ? ()=>{setBtnReplace(false)} : ()=>{setBtnReplace(true)} }
            >
              <span className="mr-2"><SiCodereview /></span>
              <span>{item.reviewService}</span>
            </div>)
            :
            (<ArrowForwardIcon className="cursor-pointer" />)
            }
          </Link>
            <Link onClick={AddToCart} className='btn'>
            {selectedServices.includes(item.id) ? t("homeContainer.removeFromCart") : t("homeContainer.addToCart")}
            </Link>
      </Box>
    </Box>
  )
}

export default ServiceButton