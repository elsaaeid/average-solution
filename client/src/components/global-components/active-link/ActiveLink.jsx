import React, { useState } from "react";
import {Tooltip} from '@mui/material';
import {Link} from "react-router-dom"
import { tokens } from "../../../theme";
import {useTheme} from '@mui/material';
import "./ActiveLink.css"


const ActiveLink = ({obj, href, classN, clickHandling}) => {
  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
        <Tooltip title={obj}>
            <Link 
             style={{
                    color: colors.grey[500],
                }}
                className={classN}
                to={href} underline="none" onClick={clickHandling}>
              <span>{obj}</span>
            </Link>
        </Tooltip>
  )
}

export default ActiveLink