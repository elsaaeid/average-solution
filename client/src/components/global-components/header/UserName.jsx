import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/auth/authSlice";


export const UserName = () => {
  const user = useSelector(selectUser);
   const shortenText = (text, n) => {
    if (text.length > n) {
      const shoretenedText = text.substring(0, n).concat("...");
      return shoretenedText;
    }
    return text;
  };
  
  const username = user?.name || "...";

  return 
   ( 
    <p className="flex flex-row mb-3 justify-around items-center w-full">
        Hi, {shortenText(username, 9)}
    </p>
    )
};
