import React from "react";
import {RiHeartAddLine} from "react-icons/ri" 
import { useDispatch, useSelector } from 'react-redux';
import { likeProduct, unlikeProduct } from '../../../redux/features/likes/likesSlice';

const HeartRating = ({ productId, isLiked }) => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.product.likes);

  const handleLike = () => {
    if (isLiked) {
      dispatch(unlikeProduct(productId));
    } else {
      dispatch(likeProduct(productId));
    }
    console.log(likes);
  };
  return (
    <div className="product">
      {likes}
      {isLiked ? 'Unlike' : 'Like'}
      <RiHeartAddLine onClick={handleLike} />
    </div>
  );
};

export default HeartRating;
