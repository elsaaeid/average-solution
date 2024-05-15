import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import {SearchContainer} from "../../global-components/search-container/SearchContainer";



const SearchComponent = ({ searchItems, closeSearch }) => { 
 const [orderState, setOrderState] = useState("");
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);
 const [searchVal, setSearchVal] = useState("");

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

 return (
    <div 
    style={{
      position: "relative",
  }}
    >
        <SearchContainer
            style={{
                color: colors.grey[900],
            }}
            SearchChange={(e)=> setSearchVal(e.target.value)}
            SearchValue={searchVal}
         />
        <ul style={{
            backgroundColor: colors.grey[700],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "15px",
            position: "absolute",
            width: "20rem",
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