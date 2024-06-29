import React from "react";
import Navbar from "../global/Navbar";
import "./pageMenu.css";

const PageMenu = ({children, firstLinkNav, firstTitleNav, secondLinkNav, secondTitleNav}) => {
  
  return (
    <div className="registeration-content flex flex-col justify-center mt-5">
        <Navbar
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