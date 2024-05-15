import React, { useState } from "react";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";
import shortenText from "../../global-components/shortenText"
const items = [
    {
      id: 1,
      "name": "Software Engineering",
      "name_ar": "هندسة البرمجيات",
      "link": "#SoftwareEngineering"
    },
    {
      id: 2,
      "name": "SEO optimization",
      "name_ar": "تحسين نتائج البحث",
      "link": "#SEOoptimization"
    },
    {
      id: 3,
      "name": "products Photography",
      "name_ar": "تصوير المنتجات",
      "link": "#productsPhotography"
    },
    {
      id: 4,
      "name": "Graphic Designing",
      "name_ar": "تصميم الجرافيك",
      "link": "#graphicDesigning"
    },
    {
      id: 5,
      "name": "Content Creating",
      "name_ar": "صناعة المحتوة",
      "link": "#contentCreating"
    },
    {
      id: 6,
      "name": "Sponsored Ads",
      "name_ar": "الاعلانات الممولة",
      "link": "#SponsoredAds"
    }
  ];
const DropdownServices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
       // Translation
       const { t, i18n } = useTranslation();
       const [selected, setSelected] = useState();

            const chooseLanguage = (e) => {
                e.preventDefault();
                setSelected(e.target.value);
            }
       

       const serviceItems = items.map(item => {
        if(i18n.language === 'ar') {
        return({
          id: item.id,
          name: item.name_ar,
          link: item.link,
        })
        }
        return item;
        })
      
    
    return (
      <Box sx={{width: 100}} className="langs-select flex flex-row">
      <FormControl fullWidth>
        <InputLabel style={{
            color: colors.grey[900],
            border: "none",
          }} id="demo-simple-select-label">{t("dropdownServices.Services")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Services"
          onChange={chooseLanguage}
          value={selected}
          className="langs-select"
          style={{
            color: colors.grey[900],
            border: colors.grey[900],
          }}
        >
        {serviceItems.map((item)=>{
          return(
            <MenuItem key={item.id}
              className=" p-2"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "around-between",
                alignItems: "center",
              }}
              value={item.id}>
              <a href={item.link}>
              {shortenText(item.name, 16)}
              </a>
            </MenuItem>
              )
          })}
        </Select>
      </FormControl>
    </Box>
    );
};

export default DropdownServices;