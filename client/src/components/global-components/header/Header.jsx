import React, { useState } from "react";
import './header.css';
import {HeaderIcons} from './HeaderIcons';
import LogoContent from "../../global-components/LogoContent";
import DropdownServices from "./DropdownServices";
import {Box, Tooltip} from '@mui/material';
import {NotificationMenu} from "./NotificationMenu";
import LanguageMenu from '../../../translation/LanguageMenu';
import {IconComponent} from './IconComponent';        
import { ThemeModeIcon } from '../ThemeModeIcon';  
import {motion} from "framer-motion";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { ShowOnLogin } from "../protect/HiddenLink";


const Header= ()=> {
    // Boolean States
    const [open, setOpen] = useState(false);
    const [toggleVariants, setToggleVariants] = useState(true);
    // Theme Colors Mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 
    //for collapsing sidebar
    const handleToggle = ()=> {
      setOpen(!open);
      setToggleVariants(!toggleVariants);
    };
    
    // linksVariants 
    const linksVariants = {
      true :{
        display: 'flex',
        opacity: 1,
	visibility: "visible",
        borderRadius: '0px 0px 150px 150px',
        visibility: "visible",
        width: '50%',
        height: "",
        transition: 'opacity display height .7s ease-in-out',
      },
      false:{
        display: 'none',
        opacity: 0,
        visibility: "hidden",
        height: "0",
        transition: 'opacity display height .7s ease-in-out',
      }
    };

        return (
            <header
            id="header"
              className="flex flex-row justify-between items-center">
                <Box className='header__container flex flex-row justify-between items-center'>
                  <LogoContent />
                  <HeaderIcons  
                    toggleVariants={toggleVariants}
                    handleToggle={handleToggle} />
                    {/* ======= menu ======= */} 
                    <motion.div  
                      initial={`${open}`}
                      animate={`${open}`}
                      variants = {linksVariants} 
                      id="links"
                      className="links"
                      style={{
                        background: colors.grey[900],
                      }}
                      >
                        <Tooltip className="link">
                            <div className="drop-down-menu">
                                <LanguageMenu />
                            </div>
                        </Tooltip>
                        <Tooltip title="Services">
                            <div className="drop-down-menu">
                                <DropdownServices
                                />
                            </div>
                        </Tooltip>
                        <Box className="flex flex-row justify-content-center items-center">
                          <Tooltip className="link" title="Mode">
                              <IconComponent        
                              icon={<ThemeModeIcon className="icon-q" zIndex="30" fontSize="small" />} />
                          </Tooltip>
                          <ShowOnLogin>
                              <Tooltip title="Notification">
                                  <IconComponent        
                                  icon={<NotificationMenu />} />
                              </Tooltip>
                          </ShowOnLogin>
                        </Box>
                    </motion.div>
				        </Box>
            </header> 
        )
    };
export default Header;
