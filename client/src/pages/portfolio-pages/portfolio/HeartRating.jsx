import React, { useState, useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { likeProduct, unlikeProduct } from '../../../redux/features/product/productSlice';
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";
import { selectUser } from '../../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom'; 


const HeartRating = ({product}) => {
  const [isLike, setIsLike] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (user) {
      if (product.likedBy.includes(user.id)) {
        setIsLike(isLike);
        const isLiked = product.likedBy.includes(user.id);
        if(isLiked) {
          setIsLike(!isLike);
        } else {
          setIsLike(isLike);
        }
      }
      else {
        setIsLike(!isLike);
      }
    }
    else {
      setIsLike(!isLike);
    }
    
  }, [product, user]);
  
 


  const handleLike = () => {
    console.log(isLike);
    if (user) {
    if (!isLike) {
      dispatch(unlikeProduct(product._id));
    } else {
      dispatch(likeProduct(product._id));
    }
  } else {
    alert(`Please login to like this product. You will be redirected to the login page.`);
    navigate('/login', { replace: true }); // Add this line to navigate to login page
  }
  };

  return (
    <Box className="product-item flex flex-row justify-between items-center">
      <p 
      className="flex flex-row justify-between items-center"
      style={{
        color: colors.grey[500],
      }}>
        {product.likes}
      </p>
      <button onClick={handleLike}>
        {isLike ? <BiLike /> : <BiSolidLike />}
      </button>
    </Box>
  );
};

export default HeartRating;
