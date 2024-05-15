import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/global-components/Loader";
import ProductForm from "../../../components/dashboard-components/product/productForm/ProductForm";
import {
  createProduct,
  selectIsLoading,
} from "../../../redux/features/product/productSlice";
import Header from "../../../components/dashboard-components/Header";
import { Box } from "@mui/material";


const initialState = {
  name: "",
  category: "",
  liveDemo: "",
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");

  const isLoading = useSelector(selectIsLoading);

  const { name, category, liveDemo, } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const generateKSKU = (category) => {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    return sku;
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("sku", generateKSKU(category));
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", productImage);
    formData.append("liveDemo", liveDemo);

    console.log(...formData);

    await dispatch(createProduct(formData));

    navigate("/dashboard");
    
  };

  return (
    <Box p="20px">
    {isLoading ? (
      <Loader />
    ) 
    : 
    (
      <>
      <Header title="Add New Product" />
      <ProductForm
        product={product}
        productImage={productImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
      />
      </>
      )}
    </Box>
  );
};

export default AddProduct;
