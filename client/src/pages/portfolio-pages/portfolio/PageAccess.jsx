import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { PageAccessItem } from './PageAccessItem';



export const PageAccess = ({toggleState, toggleTab}) => {
  return (
    <ul className="paginationBttns">
        <PageAccessItem 
        accessItemTitle="Next"
        accessItemClass={toggleState === 1 ? "active-items items" : "items"}
        accessItemClick={() =>toggleTab(1, "All", "21")}
        accessItemIcon={<ArrowBackIosNewIcon />}
        />
        <PageAccessItem 
        ccessItemTitle="First"
        accessItemClass={toggleState === 2 ? "active-items items" : "items"}
        accessItemClick={() =>toggleTab(2, "Core Ui", "17")}
        accessItemIcon="1"
        />
        <PageAccessItem 
        ccessItemTitle="Second"
        accessItemClass={toggleState === 3 ? "active-items items" : "items"}
        accessItemClick={() =>toggleTab(3, "React Ui", "3")}
        accessItemIcon="2"
        />
        <PageAccessItem 
        ccessItemTitle="Previous"
        accessItemClass={toggleState === 4 ? "active-items items" : "items"}
        accessItemClick={() =>toggleTab(4, "Full-stack", "1")}
        accessItemIcon={<ArrowForwardIosIcon />}
        />
    </ul>
  )
}
