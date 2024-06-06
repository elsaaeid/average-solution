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
import items from "././components/portfolio-components/intro-home/cardProperties";
import { useTranslation } from "react-i18next";


axios.defaults.withCredentials = true;

export const App = ()=> {
  const [isSidebar, setIsSidebar] = useState(true);
  const [theme, colorMode] = useMode(); 
  const [orderState, setOrderState] = useState("");
  const [joinState, setJoinState] = useState(true);
  const [selectedServices, setSelectedServices] = useState([]);
  const [quantity, setQuantity] = useState(0);
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

  const addToCart = (serviceName) => {
    setSelectedServices([...selectedServices, serviceName]);
    setQuantity(quantity + 1); // Increase quantity when adding to cart
  };

  const handleCheckboxChange = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((service) => service !== serviceName));
      setQuantity(quantity - 1); // Decrease quantity when removing from cart
    } else {
      setSelectedServices([...selectedServices, serviceName]);
      addToCart(serviceName);
    }
  };

           // Translation
  const { i18n } = useTranslation();

  const servicesItem = items.map(item => {
    if(i18n.language == 'ar') {
      return({
        id: item.id,
        name: item.name_ar,
        design: item.design,
        paragraph: item.paragraph_ar,
        reviewService: item.reviewService_ar,
        reMaintenanceService: item.reMaintenanceService_ar,
        acceptService: item.acceptService_ar,
      })
    }
    return item;
  });

  return (
    <GoogleOAuthProvider clientId="229485364448-1q5ujcvs6gt8e0erl7vc4rt5u4lb0g7f.apps.googleusercontent.com">
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
                    selectedServices={selectedServices}
                    handleCheckboxChange={handleCheckboxChange}
                    servicesItem={servicesItem}
                    quantity={quantity}
                  />
              </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
    </GoogleOAuthProvider>
  );
}