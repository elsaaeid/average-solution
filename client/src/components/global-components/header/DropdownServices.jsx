import React, { useState } from "react";
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
import {useParams} from "react-router-dom"

const DropdownServices = ({
  activeNav,
  setActiveNav,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
       // Translation
        const { t, i18n } = useTranslation();
        const {id} = useParams();
        const [selected, setSelected] = useState();

      const handleChange = (e) => {
          e.preventDefault();
          setSelected(e.target.value);
      }

    const items = [
      {
        id: 1,
        "name": "Software Engineering",
        "name_ar": "هندسة البرمجيات",
        "link": "#SoftwareEngineering",
      },
      {
        id: 2,
        "name": "SEO optimization",
        "name_ar": "تحسين نتائج البحث",
        "link": "#SEOoptimization",
      },
      {
        id: 3,
        "name": "products Photography",
        "name_ar": "تصوير المنتجات",
        "link": "#productsPhotography",
      },
      {
        id: 4,
        "name": "Graphic Designing",
        "name_ar": "تصميم الجرافيك",
        "link": "#graphicDesigning",
      },
      {
        id: 5,
        "name": "Content Creating",
        "name_ar": "صناعة المحتوة",
        "link": "#contentCreating",
      },
      {
        id: 6,
        "name": "Sponsored Ads",
        "name_ar": "الاعلانات الممولة",
        "link": "#SponsoredAds",
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
        })
      
    
    return (
      <Box sx={{width: 100}} className="select flex flex-row">
      <FormControl fullWidth>
        <InputLabel style={{
            color: colors.grey[100],
            border: "none",
          }} id="demo-simple-select-label">{t("services")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Services"
          onChange={handleChange}
          value={selected}
          className="select"
          style={{
            color: colors.grey[100],
            border: colors.grey[100],
          }}
        >
        {serviceItems.map((item)=>{
          return(
            <MenuItem key={item.id}
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
              value={item.id}>
              <ActiveLink
                clickHandling={() => {
                  setActiveNav(item.id)
                }}
                classN={activeNav === item.id ? 'active global-Link' : 'global-Link'}
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