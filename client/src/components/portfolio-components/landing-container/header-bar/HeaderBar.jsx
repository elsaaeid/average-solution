import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import "./HeaderBar.css"
import { useTranslation } from "react-i18next";
import landingSectionsItems from "./landingSectionsItems";
import { tokens } from "../../../../theme";
import { useTheme } from "@mui/material"; 
import HeaderBarIcon from './HeaderBarIcon';
import { Context } from '../../../../context/Context';


const HeaderBar = () => {
    // App Context
    const { activeBar, setActiveBar } = useContext(Context);
    // Theme Colors Mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  // Translation
  const { i18n } = useTranslation();
  // Header Bar Item
  const headerItem = landingSectionsItems.map(item => {
    if(i18n.language == 'ar') {
      return({
        id: item.id,
        title: item.title_ar,
        icon: item.icon,
      })
    }
    return item;
  });

  const scrollToSection = () => {
    const section = document.getElementById(landingSectionsItems.filter(item => item.id));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    };
  };


  
  return (
      <Box className="headerBar-container">
      {headerItem
        .map((item, index) => (
            <HeaderBarIcon
              key={index}
              style={{
                  borderColor: colors.grey[500],
              }}
              href= {item.id}
              titleIcon={item.title}
              clickIcon={() => {
                setActiveBar(item.id);
                scrollToSection();
                }
              }
              classIcon={activeBar === item.id ? 'active icon-item' : 'icon-item'}
              icon={item.icon}
            />
        ))}
      </Box>
  )
}

export default HeaderBar