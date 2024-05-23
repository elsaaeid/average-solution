import React, { useState, useEffect } from 'react';
import Sidebar from "../global/Sidebar";
import { Box } from "@mui/material";
import Loader from "../../global-components/Loader";
import Header from "../../global-components/header/Header";
import "./LayoutDashboard.css";


const LayoutDashboard = ({ 
  t, 
  children, 
  profile, 
  imagePreview, 
  isSidebar, 
  toggleTab, 
  colors, 
  joinState, 
  setJoinState,
  activeNav,
  setActiveNav,
}) => {
  const [loading, setLoading] = useState(true);
  
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
        <Header 
          t={t}
          toggleTab={toggleTab} 
          profile={profile} 
          imagePreview={imagePreview} 
          joinState={joinState}
          setJoinState={setJoinState}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          />
        <Box className="content-main flex flex-row">
          <Sidebar t={t} colors={colors} isSidebar={isSidebar} />
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