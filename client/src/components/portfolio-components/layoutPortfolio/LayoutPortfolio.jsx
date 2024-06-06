import React, { useState, useEffect } from 'react';
import Header from "../../global-components/header/Header";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import BackToTopButton from "../goToTopButton/BackToTopButton";
import {Box} from '@mui/material';
import Loader from "../../global-components/Loader";
import {ChatBotContainer} from "../../global-components/chat/ChatBotContainer"
import TransitionAlerts from "../alret-cookie/TransitionAlerts";
import Collapse from '@material-ui/core/Collapse';


const LayoutPortfolio = ({ 
  t, 
  toggleTab, 
  profile, 
  imagePreview, 
  children, 
  joinState,
  activeNav,
  setActiveNav,
  setJoinState,
  selectedServices,
  handleCheckboxChange,
  servicesItem,
  quantity,
 }) => {
    const [backToTop, setBackToTop] = useState(false);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = React.useState(true);
    const [alretState, setAlretState] = useState(false);



  
  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 80) {
        }
        if(window.scrollY > 100) {
        setBackToTop(true)
        }
        else {
        setBackToTop(false)
        }
    })
    }, []);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    useEffect(()=>{
      setTimeout(function(){
        setAlretState(true);
     }, 9000);
    }, [])


    
  return (
    <Box>
    {loading ? (
      <Loader />
    ) 
    : 
    (
      <Box className='app-container'>
        <Header 
          t={t}
          toggleTab={toggleTab} 
          profile={profile} 
          imagePreview={imagePreview} 
          joinState={joinState}
          setJoinState={setJoinState}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          selectedServices={selectedServices}
          handleCheckboxChange={handleCheckboxChange}
          servicesItem={servicesItem}
          quantity={quantity}
        />
        <Navbar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          />
            {children}
            
        <BackToTopButton backToTop={backToTop} />
        <ChatBotContainer />
        <Collapse in={open} className='alret-container flex items-center justify-center'>
        {alretState ? 
        (  <div className='alret-content'>
              <TransitionAlerts setOpen={setOpen} open={open} t={t} setAlretState={setAlretState} className="alret" />
          </div>)
        : null}
        </Collapse>     
        <Footer 
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          />
      </Box>
      )
    }
    </Box>
  )
}

export default LayoutPortfolio