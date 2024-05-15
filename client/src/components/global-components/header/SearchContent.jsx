import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import {AiOutlineCloseCircle} from "react-icons/ai"
import SearchComponent from './SearchComponent';
import { useTranslation } from "react-i18next";



const SearchContent = ({closeSearch, searchOpen}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const items = [
    {
    id: 1,
    name: "services",
    name_ar: "الخدمات",
    itemFiltered: "/services",
    },
    {
    id: 2,
    name: "our experience",
    name_ar: "خبرتنا",
    itemFiltered: "/experience",
    },
    {
    id: 3,
    name: "our previous works",
    name_ar: "اعمالناالسابقة",
    itemFiltered: "/portfolio",
    },
   {
  id: 4,
    name: "Software Engineering",
    name_ar: "هندسة برمجيات",
    itemFiltered: "/service/SoftwareEngineering",
  },
    {
    id: 5,
    name: "SEO optimization",
    name_ar: "تحسين مبادئ السيو",
    itemFiltered: "/service/SEOoptimization",
  },
    {
    id: 6,
    name: "products Photography",
    name_ar: "التصوير الفوتوعرافى للمنتجات",
    itemFiltered: "/service/productsPhotography",
  },
   {
  id: 7,
    name: "graphic Designing",
    name_ar: "تصميم الجرافيك",
    itemFiltered: "/service/graphicDesigning",
  },
   {
  id: 8,
    name: "content Creating",
    name_ar: "صناعة المحتوى",
    itemFiltered: "/service/contentCreating",
  },
    {
    id: 9,
    name: "sponsored Ads",
    name_ar: "الاعلانات الممولة",
    itemFiltered: "/service/SponsoredAds",
  },
];
     // Translation
     const { t, i18n } = useTranslation();

     const searchItems = items.map(item => {
      if(i18n.language === 'ar') {
      return({
        id: item.id,
        name: item.name_ar,
        itemFiltered: item.link,
      })
      }
      return item;
      })
    
  return (
    <div className="product-list w-full">
      <div className="flex w-full flex-row justify-content-center items-center">
      <div><h3
      style={{
        color: colors.grey[600],
      }}
      >{t("search")}</h3></div>
      <SearchComponent closeSearch={closeSearch} searchItems={searchItems} />
      <span className={searchOpen ? "closeBtn closeBtn-active" : "closeBtn"} onClick={closeSearch} id="iconClose" title="close search">
          <AiOutlineCloseCircle
          style={{
            color: colors.grey[600],
          }}
          />
      </span>
      </div>
    </div>
  );
};

export default SearchContent;