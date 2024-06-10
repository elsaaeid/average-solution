import React from 'react';
import {Tooltip} from '@mui/material';
import { tokens } from "../../../../theme";
import {useTheme} from '@mui/material';

               
const NavIcons = ({titleIcon, href, clickIcon, classIcon, icon}) => {
  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
        <Tooltip title={titleIcon}>
            <a 
             style={{
                    color: colors.grey[500],
                }}
                className='headerBarLink' href={href} underline="none" onClick={clickIcon}>
              <span
                className={classIcon}
                style={{
                      color: colors.grey[500],
                  }}
              >{icon}</span>
              <span className="mt-1">{titleIcon}</span>
            </a>
        </Tooltip>
  )
}

export default NavIcons