import React from "react";
import Navbar from "../../dashboard-components/global/Navbar";
import "./pageMenu.css";

const PageMenu = ({children, firstLinkNav, firstTitleNav, secondLinkNav, secondTitleNav, orderState, toggleTab}) => {
  
  return (
    <div className="registeration-content flex flex-col justify-center items-center mt-5">
        <Navbar
          orderState={orderState}
          toggleTab={toggleTab}
          firstLinkNav={firstLinkNav} 
          firstTitleNav={firstTitleNav} 
          secondLinkNav={secondLinkNav} 
          secondTitleNav={secondTitleNav} 
          />
        <div className="auth-content">
          {children}
        </div>
    </div>
  );
};

export default PageMenu;