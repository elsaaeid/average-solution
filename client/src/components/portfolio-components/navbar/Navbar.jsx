import React, {useEffect, useContext} from 'react';
import "./Navbar.css"
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material"; 
import { useLocation } from 'react-router-dom';
import { Context } from "../../../context/Context";
import { useTranslation } from "react-i18next";
import items from "../sectionsItems/items";
import Box from '@mui/material/Box';
import NavIcon from './NavIcon';


const Navbar = ()=>{
  // Translation
const { i18n } = useTranslation();

  // App Context
  const { activeNav, setActiveNav} = useContext(Context);
  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Location
  const location = useLocation();

  // Location Handlling Side Effect
  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location, setActiveNav]);

  const navItems = items.map(item => {
  if(i18n.language == 'ar') {
    return({
      id: item.id,
      title: item.title_ar,
      href: item.href,
      icon: item.icon,
    })
  }
  return item;
});
  return(
    <Box className="nav-container">
    {navItems
      .map((item) => (
          <NavIcon
              style={{
                  borderColor: colors.grey[500],
              }}
              titleIcon={item.title}
              hrefIcon={item.href}
              clickIcon={() => setActiveNav(item.href)}
              classIcon={activeNav === item.href ? 'active icon-item' : 'icon-item'}
              icon={item.icon}
          />
      ))}
    </Box>
  )
}
export default Navbar