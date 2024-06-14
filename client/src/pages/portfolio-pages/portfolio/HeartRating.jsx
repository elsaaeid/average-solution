import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { likeProduct, unlikeProduct } from '../../../redux/features/product/productSlice';
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";

const HeartRating = ({product, currentItems}) => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const isLiked = currentItems.includes(product._id);

  const handleLike = () => {
    dispatch(likeProduct(product._id));
    setIsLike(true);
    console.log(isLiked);
  };

  const handleUnlike = () => {
    dispatch(unlikeProduct(product._id));
    setIsLike(false);
  };


  return (
    <Box className="product-item flex flex-row justify-between items-center">
       <p 
        className="flex flex-row justify-between items-center"
        style={{
          color: colors.grey[500],
        }}>{product.likes}</p>
      {isLike? (
        <button onClick={handleUnlike}>
          <BiSolidLike />
        </button>
      ) : (
        <button onClick={handleLike}>
          <BiLike />
        </button>
      )}
    </Box>
  );
};

export default HeartRating;
