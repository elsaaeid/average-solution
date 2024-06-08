

import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../theme";



export const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
    // Theme Colors Mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography style={{
        color: colors.grey[100],
      }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};