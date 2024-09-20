import axios from "axios";
import {BACKEND_URL} from "../../helper.js";

const API_URL = `${BACKEND_URL}/api/products/`;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all products
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Product
const deleteProduct = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Product
const getProduct = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};



// Like product 
const likeProduct = async (id) => {
  const response = await axios.post(`${API_URL}${id}`);
  return response.data;
};

// unlike Product
const unlikeProduct = async (id) => {
  const response = await axios.post(`${API_URL}${id}`);
  return response.data;
};
const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  likeProduct,
  unlikeProduct,
};

export default productService;
