import React, { useState } from "react";
import "./LanguageMenu.css";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import i18n from './i18n';
import unitedStates from "./assets/language-imgs/unitedStates.png"
import egyptStates from "./assets/language-imgs/egyptStates.png"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";


const languages = [
  {
    id: 1,
    code: 'en',
    name: 'English',
    dir: 'ltr',
    icon: unitedStates,
  },
  {
    id: 2,
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    icon: egyptStates,
  },
]

const LanguageMenu = () => {
  const [bodyDir, setBodyDir] = useState("ltr");
  const [htmlLang, setHtmlLang] = useState("en");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
       // Translation
       const { t } = useTranslation();

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value); 
        let langValue = e.target.value; 
        setSelectedLanguage(langValue);
        document.body.dir = bodyDir
      document.querySelector("html").lang = htmlLang
      if(selectedLanguage === "en") {
        setBodyDir("ltr");
        setHtmlLang("en");
        document.getElementById("links").style.right = "50%";
      }
      else if(selectedLanguage === "ar") {
        setBodyDir("rtl");
        setHtmlLang("ar");
        document.getElementById("links").style.right = "0";
      }
    }

    return (
      <Box sx={{width: 100}} className="langs-select flex flex-row">
      <FormControl fullWidth>
        <InputLabel style={{
            color: colors.grey[900],
            border: "none",
          }} id="demo-simple-select-label">{t("language")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Language"
          defaultValue={selectedLanguage} 
          onChange={chooseLanguage} 
          className="langs-select"
          style={{
            color: colors.grey[900],
            border: colors.grey[900],
          }}
        >
        {languages.map((language)=>{
          return(
            <MenuItem key={language.code}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "around-between",
                alignItems: "center",
              }}
              value={language.code}>
              {language.name}
              <div style={{width: "10px", height: "10px"}}>
                <img src={language.icon} alt="img-langs" />
              </div>
            </MenuItem>
              )
          })}
        </Select>
      </FormControl>
    </Box>
    );
};

export default LanguageMenu;