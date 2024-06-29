import React from 'react';
import {Box} from '@mui/material';
import average from "../../assets/average.gif";
import {useNavigate} from "react-router-dom"


const LogoContent = () => {
  const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	  };
  return (
    <Box id="logo-content" className="logo-content flex justify-center items-center flex-col" onClick={goHome}>
        <Box className='me flex justify-center items-center'>
            <img src={average} alt="logo" />
        </Box>
    </Box>
  )
}

export default LogoContent