import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import {SearchContainer} from "../../global-components/search-container/SearchContainer";



const SearchComponent = ({ 
  searchItems,
   closeSearch, 
  searchVal,
  setSearchVal,
  openHeaderSearch,
  setOpenHeaderSearch,
  searchOpen,
}) => { 
 const [orderState, setOrderState] = useState("");
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);


 const filteredItems = searchItems.filter((item) => {
  if (searchVal == "") { 
    return null;
  }
  else if (item.name.toLowerCase().includes(searchVal.toLowerCase())) { 
    return item;
  }
  else {
    return null
    }
  });
 //Dropdown
const toggleTab = (order) => {
 setOrderState(order);
};

// search change
const SearchChange = (e)=> {
 setSearchVal(e.target.value);
}

useEffect(()=>{
  if(searchVal == "") {
    setOpenHeaderSearch(true);
  }
  else {
    setOpenHeaderSearch(false);
  }
}, [searchVal]);

  const searchCloseHandle = ()=> {
    setSearchVal("");
    setOpenHeaderSearch(true);
  };

 return (
    <div 
        style={{
          position: "relative",
      }}>
        <div className='header-search flex flex-row justify-center items-center'>
          <SearchContainer
            style={{
              color: colors.grey[900],
            }}
            SearchChange={SearchChange}
            SearchValue={searchVal}
            searchCloseHandle={searchCloseHandle}
            openSearch={openHeaderSearch}
          />
        <span
          style={{
            color: colors.grey[900],
          }}
          className={searchOpen ? "closeBtn btn closeBtn-active" : "btn closeBtn"} 
          onClick={closeSearch} id="iconClose" title="close search">
          x
        </span>
        </div>
        <ul style={{
            backgroundColor: colors.grey[700],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
            position: "absolute",
            left: "7px",
            width: "99%",
            overflowY: "scroll",
            zIndex: "500",
        }}>
        {filteredItems.map((item, index) => (
          <li
            className={orderState === item.name ? "tabs-sections active-tabs-sections" : "tabs-sections"}
            onClick={closeSearch}
           key={index} id={item.id}>
          <Link 
           onClick={() =>toggleTab(item.name)}
          to={item.itemFiltered}
          >{item.name}</Link></li>
        ))}
      </ul>
    </div>
 );
};

export default SearchComponent;