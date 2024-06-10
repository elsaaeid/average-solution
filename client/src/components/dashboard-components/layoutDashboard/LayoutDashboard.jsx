import React, { useState, useEffect } from 'react';
import Sidebar from "../global/Sidebar";
import { Box } from "@mui/material";
import Loader from "../../global-components/Loader";
import Header from "../../global-components/header/Header";
import "./LayoutDashboard.css";


const LayoutDashboard = ({ 
  children, 
  colors
}) => {
  const [loading, setLoading] = useState(true);
  
  // Loading Side Effect
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Box>
    {loading ? (
      <Loader />
    ) 
    : 
    (
      <Box className="app-container flex flex-col">
        <Header />
        <Box className="content-main flex flex-row">
          <Sidebar colors={colors} />
          <Box className="basic-content w-full">
              {children}
          </Box>
        </Box>
      </Box>
      )
    }
    </Box>
  )
}

export default LayoutDashboard