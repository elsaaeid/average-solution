import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Header from "../../../components/dashboard-components/Header";
import ProductList from "../../../components/dashboard-components/product/productList/ProductList";
import Loader from "../../../components/global-components/Loader"


const Products = () => {
  const { products, isLoading } = useSelector(
    (state) => state.product
  );


  return (
    <Box className="w-full" p="20px">
    {isLoading && <Loader />}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Products" />
    </Box>
    <Box>
      <ProductList products={products} />
    </Box>
  </Box>
  )
}

export default Products