import React, { createContext, useState, useLayoutEffect, useEffect } from 'react';
import items from ".././components/portfolio-components/intro-home/cardProperties";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  selectUser,
} from "../redux/features/auth/authSlice";

// Create a context
export const Context = createContext();

// ThemeProvider component to manage the theme state
export const ContextProvider = ({ children }) => {
  // user Select
  const user = useSelector(selectUser);
  // Initial State
  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
    photo: user?.photo || "",
    role: user?.role || "",
    isVerified: user?.isVerified || false,
  };

// Translation
const { i18n } = useTranslation();
// Button State
const [btnState, setBtnState] = useState();
// active Nav Item State
const [activeNav, setActiveNav] = useState('/');
// Order State 
const [orderState, setOrderState] = useState("");
// Join State
const [joinState, setJoinState] = useState(true);
// Service States
const [service, setService] = useState("");
// profile State
const [profile, setProfile] = useState(initialState);
// profile Image State
const [profileImage, setProfileImage] = useState(null);
// profile imagePreview State
const [imagePreview, setImagePreview] = useState(null);
// Selected Services State
const [selectedServices, setSelectedServices] = useState([]);
// Quantity State
const [quantity, setQuantity] = useState(0)
// Button Handling Function
const btnHandling = (state)=>{
  setBtnState(state);
};
// toggleTab Function
const toggleTab = (order) => {
  setOrderState(order);
};

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

  // Auth State select
  const { isLoggedIn, isSuccess } =
      useSelector((state) => state.auth);

// Join title changing on Condition
useEffect(() => {
  if (isSuccess && isLoggedIn) {
    // join-title state
    setJoinState(false);
  }
  else {
    setJoinState(true);
  }
}, [isLoggedIn, isSuccess, setJoinState]);


// Cart handling Function
const addToCart = (serviceName) => {
  setSelectedServices([...selectedServices, serviceName]);
  setQuantity(quantity + 1); // Increase quantity when adding to cart
};

// CheckboxChange handling Function
const handleCheckboxChange = (serviceName) => {
  if (selectedServices.includes(serviceName)) {
    setSelectedServices(selectedServices.filter((service) => service !== serviceName));
    setQuantity(quantity - 1); // Decrease quantity when removing from cart
  } else {
    setSelectedServices([...selectedServices, serviceName]);
    addToCart(serviceName);
  }
};

// servicesItem 
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
    <Context.Provider 
      value={{
          btnState, 
          btnHandling, 
          activeNav,
          setActiveNav, 
          orderState,
          toggleTab, 
          joinState,
          setJoinState, 
          service,
          setService, 
          profile, 
          setProfile, 
          profileImage, 
          setProfileImage, 
          imagePreview, 
          setImagePreview,
          selectedServices,
          setSelectedServices,
          quantity,
          setQuantity,
          handleCheckboxChange,
          servicesItem,
      }}
      >
      {children}
    </Context.Provider>
  );
};