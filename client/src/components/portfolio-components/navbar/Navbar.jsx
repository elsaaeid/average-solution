import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import "./Navbar.css"
import { useTranslation } from "react-i18next";
import items from "../sectionsItems/items";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material"; 
import NavIcon from './NavIcon';
import { useLocation } from 'react-router-dom';

const Navbar = (
    {activeNav,
    setActiveNav}
) => {
     // Translation
const { i18n } = useTranslation();
const theme = useTheme();
const colors = tokens(theme.palette.mode);

const navItem = items.map(item => {
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

const location = useLocation();

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location, setActiveNav]);

  return (
      <Box className="nav-container">
      {navItem
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