import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

const initialState = {
  product: null,
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  category: [],
};

// Create New Product
export const createProduct = createAsyncThunk(
  "products/create",
  async (formData, thunkAPI) => {
    try {
      return await productService.createProduct(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all products
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete a Product
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id, thunkAPI) => {
    try {
      return await productService.deleteProduct(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get a product
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getProduct(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Update product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await productService.updateProduct(id, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// likeProduct 
export const likeProduct  = createAsyncThunk(
  "products/likeProduct",
  async ({ productId, userId }, thunkAPI) => {
    try {
      return await productService.likeProduct({ productId, userId });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// unlikeProduct
export const unlikeProduct = createAsyncThunk(
  "products/unlikeProduct",
  async ({ productId, userId }, thunkAPI) => {
    try {
      return await productService.unlikeProduct({ productId, userId });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice( {
  name: "product",
  initialState,
  reducers: {
    CALC_CATEGORY(state, action) {
      const products = action.payload;
      const array = [];
      products.map((item) => {
        const { category } = item;

        return array.push(category);
      });
      const uniqueCategory = [...new Set(array)];
      state.category = uniqueCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.products.push(action.payload);
        toast.success("Service added successfully");
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload;
        toast.success("Service deleted successfully");
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.product = action.payload;
        toast.success("Service updated successfully");
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      // Handle likeProduct actions
      .addCase(likeProduct.pending, (state) => {
        state.isLoading = true; // Set loading state
        state.isError = false; // Clear previous errors
        state.message = ""; // Clear previous messages
      })
      .addCase(likeProduct.fulfilled, (state, action) => {
        state.isLoading = false; // Reset loading state
        state.isSuccess = true; // Set success state
    
        const updatedProduct = action.payload; // Get the updated product from the action payload
        const index = state.products.findIndex(product => product._id === updatedProduct._id); // Find the index of the product
    
        if (index !== -1) {
            // Update the product with new like count and likedBy
            state.products[index] = {
                ...state.products[index], // Preserve existing product properties
                ...updatedProduct // Merge with updated properties
            };
        }
    
        state.message = "Product liked successfully"; // Set success message
    })
      .addCase(likeProduct.rejected, (state, action) => {
          state.isLoading = false; // Reset loading state
          state.isError = true; // Set error state
          state.message = action.payload; // Set error message
      })
      // Handle unlikeProduct actions
      .addCase(unlikeProduct.pending, (state) => {
          state.isLoading = true; // Set loading state
          state.isError = false; // Clear previous errors
          state.message = ""; // Clear previous messages
      })
      .addCase(unlikeProduct.fulfilled, (state, action) => {
        state.isLoading = false; // Reset loading state
        state.isSuccess = true; // Set success state
    
        const updatedProduct = action.payload; // Get the updated product from the action payload
        const index = state.products.findIndex(product => product._id === updatedProduct._id); // Find the index of the product
    
        if (index !== -1) {
            // Update the product with new like count and likedBy
            state.products[index] = {
                ...state.products[index], // Preserve existing product properties
                ...updatedProduct // Merge with updated properties
            };
        }
    
        state.message = "Product unliked successfully"; // Set success message
    })
      .addCase(unlikeProduct.rejected, (state, action) => {
          state.isLoading = false; // Reset loading state
          state.isError = true; // Set error state
          state.message = action.payload; // Set error message
      })
  },
});


export const { CALC_CATEGORY } =
  productSlice.actions;

export const selectIsLoading = (state) => state.product.isLoading;
export const selectProduct = (state) => state.product.product;
export const selectCategory = (state) => state.product.category;

export default productSlice.reducer;

