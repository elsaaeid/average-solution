import React from "react";
import Navbar from "../../dashboard-components/global/Navbar";
import "./pageMenu.css";

const PageMenu = ({children, firstLinkNav, firstTitleNav, secondLinkNav, secondTitleNav, orderState, toggleTab}) => {
  
  return (
    <div className="registeration-content">
      <div className="intro-welcome mb-3">
        <Navbar
        orderState={orderState}
        toggleTab={toggleTab}
        firstLinkNav={firstLinkNav} 
        firstTitleNav={firstTitleNav} 
        secondLinkNav={secondLinkNav} 
        secondTitleNav={secondTitleNav} 
        />
        <div className="mt-3">
        {children}
        </div>
      </div>
    </div>
  );
};

export default PageMenu;