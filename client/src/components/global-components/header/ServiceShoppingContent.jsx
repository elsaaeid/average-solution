import React, {useContext, useState} from 'react';
import {Box, Menu, MenuItem, Divider, IconButton, Tooltip} from '@mui/material';
import {IconComponent} from './IconComponent';
import { TbShoppingCartCog } from "react-icons/tb";
import CloseIcon from '@mui/icons-material/Close';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import ServiceShoppingForm from '../service-shopping-form/ServiceShoppingForm';
import Badge from '@mui/material/Badge';
import { Context } from '../../../context/Context';


export const ServiceShoppingContent = ()=> {

  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // App Context
  const {quantity} = useContext(Context);

  // Anchor Element States
  const [anchorEl, setAnchorEl] = useState(null);

  // Anchor Element Boolean Method
  const open = Boolean(anchorEl);

  // Open Handle Function
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // Close Handle Function
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box 
      style={{
        color: colors.grey[100],
      }}
      sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="service-cart">
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2 }}
            aria-controls={open ? 'service-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <IconComponent        
                icon={<Badge 
                      style={{
                        color: colors.grey[100],
                      }}
                       badgeContent={quantity}>
                        <TbShoppingCartCog
                        style={{
                          color: colors.grey[100],
                        }}
                         className="icon" fontSize="small" />
                      </Badge>
                    } />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="service-menu"
        open={open}
        PaperProps={{
          elevation: 0,
          sx: {
            overflowY: 'scroll',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            width: 300,
            '& .MuiAvatar-root': {
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      <Box 
        style={{
          background: colors.grey[900],
          color: colors.grey[100],
        }}
      className="flex flex-col">
        <Tooltip title="Close">
            <CloseIcon className="ml-10 mt-2 cursor-pointer" onClick={handleClose} />
        </Tooltip>
        <Divider
        style={{
          color: colors.grey[100],
        }}
        />
      </Box>
        <div
          className='flex flex-col justify-center items-center w-full'
          style={{
            background: colors.grey[900],
            color: colors.grey[100],
          }}
          >
            <MenuItem className="w-full h-full">
                <ServiceShoppingForm />
            </MenuItem>
            <Divider />
        </div>
      </Menu>
    </React.Fragment>
  )
}