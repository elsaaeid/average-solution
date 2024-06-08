import React from 'react';
import {Tooltip} from '@mui/material';
import {Link} from "react-router-dom"
import { tokens } from "../../../theme";
import {useTheme} from '@mui/material';

               
const NavIcons = ({titleIcon, hrefIcon, clickIcon, classIcon, icon}) => {
  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
        <Tooltip title={titleIcon}>
            <Link 
             style={{
                    color: colors.grey[500],
                }}
                className='navLink' to={hrefIcon} underline="none" onClick={clickIcon}>
              <span className={classIcon}
               style={{
                    color: colors.grey[500],
                }}
              >{icon}</span>
              <span className="mt-1">{titleIcon}</span>
            </Link>
        </Tooltip>
  )
}

export default NavIcons