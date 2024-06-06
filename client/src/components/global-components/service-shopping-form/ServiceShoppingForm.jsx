import React from "react";
import "./ServiceShoppingForm.scss";
import CartItem from "./CartItem";
import { Box } from "@mui/material";




const ServiceShoppingForm = ({
  selectedServices, 
  handleCheckboxChange,
  servicesItem
}) => {

  return (
    <Box>
      <CartItem 
        selectedServices={selectedServices}
        handleCheckboxChange={handleCheckboxChange}
        servicesItem={servicesItem}
        />
    </Box>
  );
};

export default ServiceShoppingForm;
