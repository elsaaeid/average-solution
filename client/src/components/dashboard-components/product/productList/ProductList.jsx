import React, { useEffect, useState } from "react";
import {SearchContainer} from "../../../global-components/search-container/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_PRODUCTS,
  selectFilteredPoducts,
} from "../../../../redux/features/product/filterSlice";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useTranslation } from "react-i18next";
import {
  deleteProduct,
  getProducts,
} from "../../../../redux/features/product/productSlice";
import { useParams } from "react-router-dom";
import { selectIsLoggedIn } from "../../../../redux/features/auth/authSlice";
import { getProduct } from "../../../../redux/features/product/productSlice";
import DropdownTabs from "../../../global-components/DropdownTabs";
import TableItemsContainer from "./TableItemsContainer";
import {Box} from '@mui/material';
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import ProductSummary from "../productSummary/ProductSummary";
import useRedirectLoggedOutUser from "../../../../customHook/useRedirectLoggedOutUser";
import {
  CALC_CATEGORY,
} from "../../../../redux/features/product/productSlice";



const ProductList = () => {
  // Translation
  const { t } = useTranslation();
  useRedirectLoggedOutUser("/login");
  const [search, setSearch] = useState("");
  //Dropdown
  const [categoryState, setCategoryState] = useState("All");
  const [orderState, setOrderState] = useState("All");
  

  const filteredProducts = useSelector(selectFilteredPoducts);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

  const { id } = useParams();


  const isLoggedIn = useSelector(selectIsLoggedIn);


  const { products, isError, message } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);



  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const delProduct = async (id) => {
    console.log(id);
    await dispatch(deleteProduct(id));
    await dispatch(getProducts());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Product",
      message: "Are you sure you want to delete this product.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delProduct(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

// calculate products
useEffect(() => {
  dispatch(CALC_CATEGORY(products));
}, [dispatch, products]);

  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [numState, setNumState] = useState(products.length);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ products, search }));
  }, [products, search, dispatch]);

 //Dropdown
 const toggleTab = (category, num, order, filterTap) => {
  setCategoryState(category);
  setNumState(num);
  setOrderState(order);
  setCurrentItems(filterTap);
};



  return (
    <div className="product-list">
      <ProductSummary products={products} />
      <hr />
      <div className="w-full">
        <div className="flex flex-col justify-between">
          <span>
            <h3 style={{
              color: colors.grey[100],
            }}>{t("dashboard.productList.inventoryItems")}</h3>
          </span>
          <span className="mt-3">
            <SearchContainer
              SearchChange={(e) => setSearch(e.target.value)}
              SearchValue={search}
            />
          </span>
        </div>
        <div>
            <DropdownTabs products={products} toggleTab={toggleTab} orderState={orderState} />
        </div>
        <Box className="projects-number flex flex-row justify-between items-center">
            <span>{categoryState}</span>
            <p><span>{t("dashboard.productList.projectsNumber")}</span> <span>{numState}</span></p>
        </Box> 
        <Box className="table-container">
            <TableItemsContainer products={products} pageCount={pageCount} handlePageClick={handlePageClick} confirmDelete={confirmDelete} shortenText={shortenText} currentItems={currentItems} />
        </Box>
      </div>
    </div>
  );
};

export default ProductList;
