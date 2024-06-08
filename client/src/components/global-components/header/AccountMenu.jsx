import React, {useContext, useState} from 'react';
import {Box, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip} from '@mui/material';
import {RiLoginCircleLine} from 'react-icons/ri';
import {RiLogoutCircleLine} from 'react-icons/ri';
import {IconComponent} from './IconComponent';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { ShowOnLogin, ShowOnLogout } from "../../global-components/protect/HiddenLink";
import Profile from "../../global-components/profile/Profile";
import { useDispatch } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { logout, RESET } from "../../../redux/features/auth/authSlice";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AdminAuthorLink } from "../../global-components/protect/HiddenLink";
import {AiOutlineHome} from 'react-icons/ai';
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { Context } from '../../../context/Context';
import { UserName } from "./UserName"




export const AccountMenu = ()=> {

  // App Context
  const { toggleTab, joinState, setJoinState } = useContext(Context);

  // Translation
  const { t } = useTranslation();
  // Anchor Element States
  const [anchorEl, setAnchorEl] = useState(null);
  // Profile Title Showing States
  const [profileShowTitle, setProfileShowTitle] = useState(true);
  // Profile Content Showing States
  const [profileShowContent, setProfileShowContent] = useState(false);
  // Use Navigation
  const navigate = useNavigate();
  // Boolean Method For Anchor Element
  const open = Boolean(anchorEl);
  // Anchor Element openning Function
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // Anchor Element Closing Function
  const handleClose = () => {
    setAnchorEl(null);
  };
  // use Dispatch
  const dispatch = useDispatch();

  // logout User Function
  const logoutUser = async ({}) => {
     // join-title state
     setJoinState(true);
    dispatch(RESET());
    await dispatch(logout());
    navigate("/login");
  };

  // go To Login Function
  const goToLogin = ()=>{
    navigate('/login');
    handleClose();
    toggleTab("2");
  };
  
  // go To Register Function
  const goToRegister = ()=>{
    navigate('/register');
    handleClose();
    toggleTab("1");
  };

  // Profile Handling Function
  const profileHandling = ()=>{
    setProfileShowTitle(false);
    setProfileShowContent(true);
  };


  // Location path Name
  const pathName = window.location.pathname;

  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <React.Fragment>
      <Box 
      style={{
        color: colors.grey[100],
      }}
      sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <IconComponent        
                icon={<PeopleIcon
                  style={{
                    color: colors.grey[100],
                  }}
                   className="icon" fontSize="small" />} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
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
            <CloseIcon className="ml-10 cursor-pointer" onClick={handleClose} />
        </Tooltip>
        <Divider
        style={{
          color: colors.grey[100],
        }}
        />
        {
          joinState ?
          (<Box
            className="register-title w-full flex justify-center items-center p-3">
            <h3
            style={{
              color: colors.grey[100],
            }}
          >{t("profile.registerTitle")}</h3>
          </Box>
          )
        : null
          }
      </Box>
        <div
          className='flex flex-col justify-center items-center w-full'
          style={{
            background: colors.grey[900],
            color: colors.grey[100],
          }}
          >
          <ShowOnLogin>
            <UserName onClick={handleClose} />
            <Divider />
            <MenuItem className="w-full h-full">
              {profileShowTitle && 
                <NavLink className="flex flex-row justify-center items-center w-full" onClick={profileHandling}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  {t("profile.name")}
                </NavLink>}
              {profileShowContent && <Box className="flex flex-col justify-center items-center w-full">
                <Profile setProfileShowTitle={setProfileShowTitle} setProfileShowContent={setProfileShowContent} />
              </Box>}
            </MenuItem>
            <Divider />
          </ShowOnLogin>
          <ShowOnLogout>
            <MenuItem onClick={goToRegister} className="w-full h-full">
              <NavLink
                className="flex flex-row justify-center items-center w-full"
                >
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  {t("profile.signUp")}
              </NavLink>
            </MenuItem>
            <Divider />
          </ShowOnLogout>
          <ShowOnLogout>
            <MenuItem onClick={goToLogin} className="w-full h-full">
              <NavLink
                  to='/login'
                  className="flex flex-row justify-center items-center w-full"
                >
                  <ListItemIcon>
                    <RiLoginCircleLine fontSize="small" />
                  </ListItemIcon>
                  {t("profile.Login")}
              </NavLink>
            </MenuItem>
            <Divider />
          </ShowOnLogout>
            {pathName === "/home" ? 
            (
              <AdminAuthorLink>
                <MenuItem onClick={handleClose} className="w-full h-full">
                  <NavLink
                      to='/dashboard'
                      className="flex flex-row justify-center items-center w-full"
                    >
                      <ListItemIcon>
                        <AdminPanelSettingsIcon fontSize="small" />
                      </ListItemIcon>
                        {t("profile.adminPanel")}
                  </NavLink>
                </MenuItem>
              </AdminAuthorLink>
            ) 
              :
              (
                <MenuItem onClick={handleClose} className="w-full h-full">
                  <NavLink
                      to='/home'
                      className="flex flex-row justify-center items-center w-full"
                    >
                      <ListItemIcon>
                        <AiOutlineHome fontSize="small" />
                      </ListItemIcon>
                      {t("profile.home")}
                  </NavLink>
                </MenuItem>
              )
          }
          <ShowOnLogin>
          <Divider />
            <MenuItem onClick={logoutUser} className="w-full h-full">
              <NavLink className="flex flex-row justify-center items-center w-full">
                <ListItemIcon>
                  <RiLogoutCircleLine />
                </ListItemIcon>
                    {t("profile.Logout")}
              </NavLink>
            </MenuItem>
          </ShowOnLogin>
        </div>
      </Menu>
    </React.Fragment>
  )
}