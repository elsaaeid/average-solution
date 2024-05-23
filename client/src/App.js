import React, { useEffect, useLayoutEffect, useState } from "react";
import Routes from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  getLoginStatus,
  getUser,
  selectUser,
} from "./redux/features/auth/authSlice";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cursor from "./components/global-components/Cursor";
import { useTranslation } from "react-i18next";


axios.defaults.withCredentials = true;

export const App = ()=> {
  const [isSidebar, setIsSidebar] = useState(true);
  const [theme, colorMode] = useMode(); 
  const [orderState, setOrderState] = useState("");
  const [joinState, setJoinState] = useState(true);

    const toggleTab = (order) => {
        setOrderState(order);
      };

//Login Status
const dispatch = useDispatch();
const user = useSelector(selectUser);


const { isLoggedIn, isSuccess } =
    useSelector((state) => state.auth);

useEffect(() => {
  dispatch(getLoginStatus());
  if (isLoggedIn && user === null) {
    dispatch(getUser());
  }
}, [dispatch, isLoggedIn, user]);

useEffect(() => {
  if (isSuccess && isLoggedIn) {
    // join-title state
    setJoinState(false);
  }
  else {
    setJoinState(true);
  }
}, [isLoggedIn, isSuccess, setJoinState]);

// Translation
const { t } = useTranslation();
   
  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
    photo: user?.photo || "",
    role: user?.role || "",
    isVerified: user?.isVerified || false,
  };
  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [activeNav, setActiveNav] = useState('/');


  useLayoutEffect(() => {
    if (user) {
      setProfile({
        ...profile,
        name: user.name,
        email: user.email,
        phone: user.phone,
        photo: user.photo,
        bio: user.bio,
        role: user.role,
        isVerified: user.isVerified,
      });
    }
  }, [user]);


  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <div className="app">
                <ToastContainer />
                <Cursor />
                  <Routes 
                    t={t} 
                    activeNav={activeNav}
                    setActiveNav={setActiveNav}
                    orderState={orderState} 
                    toggleTab={toggleTab} 
                    profile={profile} 
                    setProfile={setProfile} 
                    profileImage={profileImage} 
                    setProfileImage={setProfileImage} 
                    imagePreview={imagePreview} 
                    setImagePreview={setImagePreview} 
                    isSidebar={isSidebar} 
                    setIsSidebar={setIsSidebar} 
                    joinState={joinState} 
                    setJoinState={setJoinState}
                  />
              </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
    </GoogleOAuthProvider>
  );
}