import React, { useState } from "react";
import './header.css';
import {HeaderIcons} from './HeaderIcons';
import LogoContent from "../../global-components/LogoContent";
import DropdownServices from "./DropdownServices";
import {Box, Tooltip} from '@mui/material';
import {NotificationMenu} from "./NotificationMenu";
import LanguageMenu from '../../../translation/LanguageMenu';
import {IconComponent} from './IconComponent';        
import { ThemeModeIcon } from '../../dashboard-components/ThemeModeIcon';  
import {motion} from "framer-motion";


const Header= ({ profile, imagePreview, toggleTab, joinState, setJoinState, })=> {
    
    const [open, setOpen] = useState(false);
    const [toggleVariants, setToggleVariants] = useState(true);
    //for collapsing sidebar
    const handleToggle = ()=> {
      setOpen(!open);
      setToggleVariants(!toggleVariants);
    };
    const linksVariants = {
      true :{
        display: 'flex',
        opacity: 1,
        borderRadius: '0px 0px 0px 244px',
        width: '50%',
        transition: 'opacity display .7s ease-in-out',
      },
      false:{
        display: 'none',
        opacity: 0,
        transition: 'opacity display .7s ease-in-out',
      }
    };

        return (
            <header className="flex flex-row justify-between items-center">
                <Box className='header__container flex flex-row justify-between items-center'>
                  <LogoContent />
                  <HeaderIcons 
                        setJoinState={setJoinState}
                        joinState={joinState}
                        toggleTab={toggleTab}
                        profile={profile} 
                        imagePreview={imagePreview} 
                        toggleVariants={toggleVariants}
                        handleToggle={handleToggle}
                        />
                    {/* ======= menu ======= */} 
                    <motion.div  
                    initial={`${open}`}
                    animate={`${open}`}
                    variants = {linksVariants} 
                    id="links"
                    className="links">
                        <Tooltip className="link">
                            <div className="drop-down-menu">
                                <LanguageMenu />
                            </div>
                        </Tooltip>
                        <Tooltip className="link" title="Services">
                            <div className="drop-down-menu">
                                <DropdownServices />
                            </div>
                        </Tooltip>
                        <Box className="flex flex-row justify-content-center items-center">
                          <Tooltip className="link" title="Mode">
                              <IconComponent        
                              icon={<ThemeModeIcon className="icon-q" zIndex="30" fontSize="small" />} />
                          </Tooltip>
                          <Tooltip className="link" title="Notification">
                              <IconComponent        
                              icon={<NotificationMenu profile={profile} />} />
                          </Tooltip>
                        </Box>
                    </motion.div>
				        </Box>
            </header> 
        )
    };
export default Header;