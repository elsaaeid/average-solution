import {BsArrowUpRightSquareFill} from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import {Box} from '@mui/material';
import {ItemTabs} from "./ItemTabs";
import { useTranslation } from "react-i18next";

 const DropdownTabs = ({products, orderState, toggleTab})=> {
  const [open, setOpen] = useState(true);
  const [rotate, setRotate] = useState();
  	// Translation
	const { t } = useTranslation();

    const parentRef = useRef();
    useEffect(() => {
        if (parentRef.current) {
          autoAnimate(parentRef.current);
        }
      }, [parentRef]);
   
  const showMore = () => {
    setOpen(!open);
    setRotate(!rotate);
  };

  // print items of Dropdown
  const categories = products.reduce((acc, {category}) => {
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc; 
  }, 
  []).map((category) =>
      {
        // print count of products by category
        let counter = 0;
        let filteredCategory = [];
        for (let i = 0; i < products.length; i++) {
          if (products[i].category.includes(category)) counter++;
        }
        // filter items by category
        filteredCategory = products.filter((i) => {
          if(i.category.includes(category)) {
            return products;
          }
        });
        // console.log(filteredCategory);

        return(<ItemTabs 
        itemClass={orderState == category ? "tabs active-tabs" : "tabs"}
        itemClick={() =>toggleTab(category , counter, category, filteredCategory)}
        itemTitle={category}
        />)}
      );
      
      
              
    return (
        <Box ref={parentRef} className='block-tabs'>
            <Box className="flex justify-evenly items-center"  variant="success" id="dropdown-basic" onClick={showMore}>
                {t("dropdown.Explore")} <BsArrowUpRightSquareFill className= {rotate ? "arrowExplore" : "arrowExplore toggled"} />
            </Box>         
            <ul className= {open ? "dropdown-menus flex flex-col justify-center items-center" : "dropdown-menus flex flex-col justify-center items-center dropdown-toggled"}>       
            <ItemTabs 
              itemClass={orderState ==  "All" ? "tabs active-tabs" : "tabs"}
              itemClick={() =>toggleTab("All", products.length ,  "All", products)}
              itemTitle="All"
              />
              {categories}
            </ul>
        </Box>
    )
}
export default DropdownTabs;

