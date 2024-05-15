import React from 'react';
import {Tooltip} from '@mui/material';
import {Link} from "react-router-dom"

const NavIcons = ({titleIcon, hrefIcon, clickIcon, classIcon, icon}) => {
  return (
        <Tooltip title={titleIcon}>
            <Link className='navLink' to={hrefIcon} underline="none" onClick={clickIcon}>
              <span className={classIcon}>{icon}</span>
              <span className="mt-1">{titleIcon}</span>
            </Link>
        </Tooltip>
  )
}

export default NavIcons