import React, { useContext, useState } from "react";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";
import shortenText from "../shortenText";
import ActiveLink from "../active-link/ActiveLink";
import { Context } from "../../../context/Context";

const DropdownServices = () => {
  //App Context
  const { activeNav, setActiveNav} = useContext(Context);
  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Translation
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState();
  // handleChange Function
  const handleChange = (e) => {
      e.preventDefault();
      setSelected(e.target.value);
  }

    // Service Items
    const items = [
      {
        id: 1,
        "name": "Software Engineering",
        "name_ar": "هندسة البرمجيات",
        "link": "/service/SoftwareEngineering",
      },
      {
        id: 2,
        "name": "SEO optimization",
        "name_ar": "تحسين نتائج البحث",
        "link": "/service/SEOoptimization",
      },
      {
        id: 3,
        "name": "products Photography",
        "name_ar": "تصوير المنتجات",
        "link": "/service/productsPhotography",
      },
      {
        id: 4,
        "name": "Graphic Designing",
        "name_ar": "تصميم الجرافيك",
        "link": "/service/graphicDesigning",
      },
      {
        id: 5,
        "name": "Content Creating",
        "name_ar": "صناعة المحتوة",
        "link": "/service/contentCreating",
      },
      {
        id: 6,
        "name": "Sponsored Ads",
        "name_ar" : "الاعلانات الممولة",
        "link": "/service/SponsoredAds",
      }
    ];

    const serviceItems = items.map(item => {
    if(i18n.language === 'ar') {
    return({
      id: item.id,
      name: item.name_ar,
      link: item.link,
    })
    }
    return item;
    });
    
    return (
      <Box sx={{width: 100}} className="select flex flex-row">
      <FormControl fullWidth>
        <InputLabel style={{
            color: colors.grey[100],
            border: "none",
          }} id="demo-simple-select-label">{t("Services")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={t("Services")}
          onChange={handleChange}
          value={selected}
          className="select"
          style={{
            color: colors.grey[100],
            border: colors.grey[100],
          }}
        >
        {serviceItems.map((item, index)=>{
          return(
            <MenuItem key={index}
              style={{
                  background: colors.grey[900],
                  color: colors.grey[100],
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "around-between",
                  alignItems: "center",
                  padding: "10px"
              }}
              value={item.name}>
              <ActiveLink
                clickHandling={() => {
                  setActiveNav(item.link)
                }}
                classN={activeNav === item.link ? 'active global-Link' : 'global-Link'}
                href={item.link}
                obj={shortenText(item.name, 16)} />
            </MenuItem>
              )
          })}
        </Select>
      </FormControl>
    </Box>
    );
};

export default DropdownServices;