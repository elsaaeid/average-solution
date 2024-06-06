import React, { useState, useEffect } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {SiCodereview} from "react-icons/si"
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";


const ServiceShowToggle = ({
    item, 
    btnState, })=>{
  let location = useLocation();
    const [btnReplace, setBtnReplace] = useState(true);
    useEffect(()=> {
    
        if(location.pathname === "/") {
            setBtnReplace(true);
        }
        else if (location.pathname === `/service/${item.id}`) {
            setBtnReplace(false);
        }
    }, [location.pathname, item.id]);
    return(
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
    )
}
export default ServiceShowToggle;