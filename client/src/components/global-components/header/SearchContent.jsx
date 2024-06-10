import React from "react";
import SearchComponent from './SearchComponent';
import { useTranslation } from "react-i18next";



const SearchContent = ({
  searchVal,
  searchOpen,
  setSearchVal,
  openHeaderSearch,
  setOpenHeaderSearch,
  closeSearch,
}) => {
  
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
     const { i18n } = useTranslation();

     // Search Items
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
        <SearchComponent
          searchOpen={searchOpen}
          searchVal={searchVal} 
          setSearchVal={setSearchVal}
          searchItems={searchItems} 
          openHeaderSearch={openHeaderSearch}
          setOpenHeaderSearch={setOpenHeaderSearch}
          closeSearch={closeSearch}
        />
  );
};

export default SearchContent;