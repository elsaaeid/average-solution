import React, {useState} from 'react';
import {Box, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip} from '@mui/material';
import {RiLoginCircleLine} from 'react-icons/ri';
import {RiLogoutCircleLine} from 'react-icons/ri';
import {IconComponent} from './IconComponent';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { ShowOnLogin, ShowOnLogout } from "../../global-components/protect/HiddenLink";
import Profile from "../../global-components/profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/auth/authSlice";
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

  return <p className="flex flex-row mb-3 justify-around items-center w-full">Hi, {shortenText(username, 9)} |</p>;
};


export const AccountMenu = ({profile, imagePreview, toggleTab, joinState, setJoinState,})=> {

     // Translation
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileShowTitle, setProfileShowTitle] = useState(true);
  const [profileShowContent, setProfileShowContent] = useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();


  const logoutUser = async ({}) => {
     // join-title state
     setJoinState(true);
    dispatch(RESET());
    await dispatch(logout());
    navigate("/login");
  };
  const goToLogin = ()=>{
    navigate('/login');
    handleClose();
    toggleTab("2");
  }
  
  const goToRegister = ()=>{
    navigate('/register');
    handleClose();
    toggleTab("1");
  }

  const profileHandling = ()=>{
    setProfileShowTitle(false);
    setProfileShowContent(true);
  }

const pathName = window.location.pathname;
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
                <Profile toggleTab={toggleTab} profile={profile} imagePreview={imagePreview} setProfileShowTitle={setProfileShowTitle} setProfileShowContent={setProfileShowContent} />
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
            {pathName === "/" ? 
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
                      to='/'
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