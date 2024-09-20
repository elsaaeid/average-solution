import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import Header from "../../../components/dashboard-components/Header";
import ProductSummary from "../../../components/dashboard-components/product/productSummary/ProductSummary";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProducts } from "../../../redux/features/product/productSlice";
import Loader from "../../../components/global-components/Loader";
import { useTranslation } from "react-i18next";
import ProductCharts from "../../../components/dashboard-components/product/product-charts/ProductCharts";


const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  // Translation
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  
  return (
    <Box className="w-full" p="20px">
    {isLoading ? (
      <Loader />
    ) 
    : 
    (
      <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={t("dashboard.dashboard.title")} subtitle={t("dashboard.dashboard.subtitle")} />
      </Box>
      <Box>
        <ProductSummary products={products} />
        <ProductCharts products={products} />
      </Box>
    </>
    )
    }
    </Box>
  );
};

export default Dashboard;