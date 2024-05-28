import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {LuHeartHandshake} from "react-icons/lu"
import {SiCodereview} from "react-icons/si"
import Box from '@mui/material/Box';
import { useLocation } from "react-router-dom";

  
const ServiceButton = ({btnState, setActiveNav, btnHandling, item}) => {
  const [btnReplace, setBtnReplace] = useState(true);
  let location = useLocation();

  useEffect(()=> {

    if(location.pathname === "/") {
        setBtnReplace(true);
    }
    else if (location.pathname === `/service/${item.id}`) {
        setBtnReplace(false);
    }
  }, [location.pathname, item.id]);
  
  return (
    <div className='show-service-icons mt-3 flex flex-row justify-around items-initial'>
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
        <Link to="/contact" 
        underline="none"
        className={btnState === "acceptActive" ? "btn btn-active flex items-center flex-row" : "btn flex items-center flex-row"}
        onClick={() =>
          {
            setActiveNav('/contact');
            btnHandling("acceptActive");
          }
        }
        >
        <span className="mr-2"><LuHeartHandshake /></span>
        <span>
          {item.acceptService}
        </span>
        </Link>
    </Box>
  </div>
  )
}

export default ServiceButton