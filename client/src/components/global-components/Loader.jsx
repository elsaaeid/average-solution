import React from 'react';
import {Box, Typography} from '@mui/material';
import Lottie from 'react-lottie';
import animationData from '../../lotties/DesignLoader';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Box className="loader-container">
    <center>
      <Lottie 
      options={defaultOptions}
      height={400}
      width={400}
      borderRadius={50}
    />
    </center>
    </Box>
  )
}

export default Loader