import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ProductForm from "../../../components/dashboard-components/product/productForm/ProductForm";
import {
  getProduct,
  getProducts,
  selectProduct,
  updateProduct,
  selectIsLoading,
} from "../../../redux/features/product/productSlice";
import Header from "../../../components/dashboard-components/Header";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/global-components/Loader";



const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const productEdit = useSelector(selectProduct);

  const [product, setProduct] = useState({});
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (productEdit) {
      setProduct(productEdit);
      setImagePreview(productEdit.image ? productEdit.image.filePath : null);
      setDescription(productEdit.description || "");
    }
  }, [productEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("liveDemo", product.liveDemo);
    formData.append("description", description);
    if (productImage) {
      formData.append("image", productImage);
    }

    try {
      await dispatch(updateProduct({ id, formData }));
      await dispatch(getProducts());
      navigate("/products");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <Box p="20px">
    {isLoading ? (
      <Loader />
    ) 
    : 
    (
    <Box id="editProduct">
      <Header title={t("dashboard.editProduct")} />
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
    </Box>
      )}
      </Box>
    );
  };


export default EditProduct;
