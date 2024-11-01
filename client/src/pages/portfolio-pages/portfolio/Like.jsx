import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { likeProduct, unlikeProduct } from '../../../redux/features/product/productSlice';
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const Like = ({product}) => {
  const [isLike, setIsLike] = useState(false); // Local state to track like status
  const [likeCount, setLikeCount] = useState(product.likeCount);
  const dispatch = useDispatch();
  // Auth State Select
  const { user } = useSelector(
    (state) => state.auth
    );  const navigate = useNavigate(); 
  
// Handle like functionality
const handleLike = async () => {
  if (!user) {
      alert("Please login to like this product. You will be redirected to the login page.");
      navigate("/login", { replace: true });
      return;
  }

  // Check if the user has already liked the product
  if (isLike) {
      alert("You have already liked this product.");
      return; // Prevent further action if already liked
  }

  try {
      // If not liked, dispatch the like action
      await dispatch(likeProduct({ productId: product._id, userId: user.id }));
      
      // Update state only after successful like action
      setLikeCount(prevCount => prevCount + 1); // Increment like count safely
      setIsLike(true); // Update the like state
  } catch (error) {
      console.error("Error liking product:", error);
      alert("An error occurred while liking the product. Please try again."); // Inform the user of the error
  }
};


// Handle unlike functionality
const handleUnlike = async () => {
  if (!user) {
      alert("Please login to unlike this product. You will be redirected to the login page.");
      navigate("/login", { replace: true });
      return;
  }

  // Check if the user has already unliked the product
  if (!isLike) {
      alert("You have already unliked this product.");
      return; // Prevent further action if already unliked
  }

  try {
      // Dispatch the unlike action
      await dispatch(unlikeProduct({ productId: product._id, userId: user.id }));
      
      // Update state only after successful unlike action
      setLikeCount(prevCount => Math.max(prevCount - 1, 0)); // Prevent negative like count
      setIsLike(false); // Update the like state
  } catch (error) {
      console.error("Error unliking product:", error);
      alert("An error occurred while unliking the product. Please try again."); // Inform the user of the error
  }
};

// Update local state if the product prop changes
useEffect(() => {
  setLikeCount(product.likeCount);
  setIsLike(user && product.likedBy.includes(user.id)); // Use && to ensure user exists
}, [product, user]);

  return (
    <Box className="product-item flex flex-row justify-between items-center">
      <button className='flex flex-row justify-center items-center'>
      ({likeCount}) <AiOutlineLike className='mx-2' onClick={handleLike} /> : <AiOutlineDislike className='mx-2' onClick={handleUnlike} />
      </button>
    </Box>
  );
};

export default Like;
