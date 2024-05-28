import React, { useEffect } from "react";
import "./ProductSummary.scss";
import CategoryIcon from '@mui/icons-material/Category';
import { BiCategory } from "react-icons/bi";
import InfoBox from "../../infoBox/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import {
  CALC_CATEGORY,
  selectCategory,
} from "../../../../redux/features/product/productSlice";
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";



// Icons
const productIcon = <CategoryIcon size={40} color="#fff" />;
const categoryIcon = <BiCategory size={40} color="#fff" />;


const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  useEffect(() => {
    dispatch(CALC_CATEGORY(products));
  }, [dispatch, products]);

  return (
    <div className="product-summary">
      <h3 style={{
        color: colors.grey[500],
      }}>Inventory Stats</h3>
      <div className="info-summary flex flex-row justify-around items-center">
        <InfoBox
          icon={productIcon}
          title={"Total Items"}
          count={products.length}
          bgColor="card1"
        />
        <InfoBox
          icon={categoryIcon}
          title={"All Categories"}
          count={category.length}
          bgColor="card4"
        />
      </div>
    </div>
  );
};

export default ProductSummary;
