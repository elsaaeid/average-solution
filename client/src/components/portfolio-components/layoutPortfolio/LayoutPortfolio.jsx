import React, { useState, useEffect, useContext } from 'react';
import Header from "../../global-components/header/Header";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import BackToTopButton from "../goToTopButton/BackToTopButton";
import {Box} from '@mui/material';
import Loader from "../../global-components/Loader";
import {ChatBotContainer} from "../../global-components/chat/ChatBotContainer"
import TransitionAlerts from "../alret-cookie/TransitionAlerts";
import Collapse from '@material-ui/core/Collapse';
import { Context } from '../../../context/Context';


const LayoutPortfolio = ({children}) => {
    // loading State
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = React.useState(true);

    // Alret State
    const [alretState, setAlretState] = useState(false);
    // App Context
    const { backToTop } = useContext(Context);

    // Loading Handlling Side Effect
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    // Alret Handlling Side Effect
    useEffect(()=>{
      setTimeout(function(){
        setAlretState(true);
     }, 9000);
    }, [])


    
  return (
    <>
    {loading ? (
      <Loader />
    ) 
    : 
    (
      <Box className='app-container'>
        <Header />
        <Navbar />
        <section id='section'>
          {children}
        </section>
        <BackToTopButton backToTop={backToTop} />
        <ChatBotContainer />
        <Collapse in={open} className='alret-container flex items-center justify-center'>
        {alretState ? 
        (  <div className='alret-content'>
              <TransitionAlerts setOpen={setOpen} open={open} setAlretState={setAlretState} className="alret" />
          </div>)
        : null}
        </Collapse>     
        <Footer />
      </Box>
      )
    }
    </>
  )
}

export default LayoutPortfolio