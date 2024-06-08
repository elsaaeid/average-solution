import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const likeProduct = createAsyncThunk(
  'product/likeProduct',
  async (productId, { getState }) => {
    const { user } = getState().auth; // Assuming the user is stored in the auth slice
    const response = await axios.post(`/api/products/${productId}/like`, null, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  }
);

export const unlikeProduct = createAsyncThunk(
  'product/unlikeProduct',
  async (productId, { getState }) => {
    const { user } = getState().auth; // Assuming the user is stored in the auth slice
    const response = await axios.post(`/api/products/${productId}/unlike`, null, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    likes: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(likeProduct.fulfilled, (state, action) => {
        state.likes = action.payload.likes;
      })
      .addCase(unlikeProduct.fulfilled, (state, action) => {
        state.likes = action.payload.likes;
      });
  },
});

export default productSlice.reducer;