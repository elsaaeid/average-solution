import React, {useState} from 'react';
import Box from '@mui/material/Box';
import "./HeaderBar.css"
import { useTranslation } from "react-i18next";
import items from "../landingSections/items";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material"; 
import HeaderBarIcon from './HeaderBarIcon';
// import { useLocation } from 'react-router-dom';

const HeaderBar = (
) => {
     // Translation
const { i18n } = useTranslation();
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [activeNav, setActiveNav] = useState("");
const headerItem = items.map(item => {
  if(i18n.language == 'ar') {
    return({
      id: item.id,
      title: item.title_ar,
      icon: item.icon,
    })
  }
  return item;
});

// const location = useLocation();

//   useEffect(() => {
//     setActiveNav(location.pathname);
//   }, [location, setActiveNav]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
      <Box className="headerBar-container">
      {headerItem
        .map((item) => (
            <HeaderBarIcon
                style={{
                    borderColor: colors.grey[500],
                }}
                titleIcon={item.title}
                id={item.id}
                clickIcon={() => {
                  setActiveNav(item.id);
                  scrollToSection(item.id);}
                }
                classIcon={activeNav === item.id ? 'active icon-item' : 'icon-item'}
                icon={item.icon}
            />
        ))}
      </Box>
  )
}

export default HeaderBar