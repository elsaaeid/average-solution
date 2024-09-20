import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Header from "../../../components/dashboard-components/Header";
import ProductList from "../../../components/dashboard-components/product/productList/ProductList";
import Loader from "../../../components/global-components/Loader"
import { useTranslation } from "react-i18next";

const Products = () => {
  const { products, isLoading } = useSelector(
    (state) => state.product
  );

  // Translation
  const { t } = useTranslation();
  return (
    <Box className="w-full" p="20px">
    {isLoading && <Loader />}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title={t("dashboard.products")} />
    </Box>
    <Box>
      <ProductList products={products} />
    </Box>
  </Box>
  )
}

export default Products