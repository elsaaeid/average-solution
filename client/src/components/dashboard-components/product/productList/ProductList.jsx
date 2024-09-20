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
import {IconComponent} from '../../../global-components/header/IconComponent';
import { Box, useTheme, Tooltip } from "@mui/material";
import { tokens } from "../../../../theme";
import ProductSummary from "../productSummary/ProductSummary";
import useRedirectLoggedOutUser from "../../../../customHook/useRedirectLoggedOutUser";
import {
  CALC_CATEGORY,
} from "../../../../redux/features/product/productSlice";
import {RiSearchEyeLine} from "react-icons/ri";
import {VscSearch} from "react-icons/vsc";


const ProductList = () => {
  // Translation
  const { t } = useTranslation();
  useRedirectLoggedOutUser("/login");
  const [search, setSearch] = useState("");
  //Dropdown
  const [categoryState, setCategoryState] = useState("All");
  const [orderState, setOrderState] = useState("All");
  // open Portfolio Search
  const [openPortfolioSearch, setOpenPortfolioSearch] = useState(true);

  // direction of web page
  const [searchIconDir, setSearchIconDir] = useState(true);

  // open search
  const [searchOpen, setSearchOpen] = useState(true);

  const filteredProducts = useSelector(selectFilteredPoducts);
  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // A hook to access the redux dispatch function
  const dispatch = useDispatch();
  // Use Params for id 
  const { id } = useParams();

  // Selecting Login Status
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Product State Selecting
  const { products, isError, message } = useSelector(
    (state) => state.product
  );

  // Get Product Depend On Login Status
  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);


  // The Shorten Of Text
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  // Product Deleting Function
  const delProduct = async (id) => {
    console.log(id);
    await dispatch(deleteProduct(id));
    await dispatch(getProducts());
  };

  // Confirm of Product Deleting Function
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

  // Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [numState, setNumState] = useState(products.length);
  const itemsPerPage = 5;


  // filtering Products And Set Current Items
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

  // Products Filtering Side Effect
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



// search change 
const SearchChange = (e)=> {
  setSearch(e.target.value);
 };


 // Set Search Value = ""
useEffect(()=>{
  if(search == "") {
    setOpenPortfolioSearch(true);
  }
  else {
    setOpenPortfolioSearch(false);
  }
}, [search]);


// direction of web page
useEffect(() => {
        if(document.body.dir === "ltr") {
            setSearchIconDir(true);
        }
        else if(document.body.dir === "rtl") {
            setSearchIconDir(false);
        }
    }, [])

    // Handel Close Search
    const searchCloseHandle = ()=> {
      setSearch("");
      setOpenPortfolioSearch(true);
    };

    // openSearch Handling
    const openSearch = ()=> {
      setSearchOpen(false)
    }
    // closeSearch Handling
    const closeSearch = ()=> {
        setSearchOpen(true);
        setSearch("");
        setOpenPortfolioSearch(true);
    }



  return (
    <div className="product-list">
      <ProductSummary products={products} />
      <hr />
      <div className="w-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-between my-3">
            <h3 style={{
              color: colors.grey[500],
            }}>
              {t("dashboard.productList.inventoryItems")}
            </h3>
        </div>
        <div className="products-filter relative flex flex-row items-center justify-center">
          <DropdownTabs products={products} toggleTab={toggleTab} orderState={orderState} />
          <div className="search-portfolio-container absolute flex flex-row items-center justify-center">
            <div className={searchOpen ? "search-portfolio" : "search-portfolio active"}>
              <SearchContainer
                SearchChange={SearchChange}
                SearchValue={search}
                searchCloseHandle={searchCloseHandle}
                openSearch={openPortfolioSearch}
                />
            </div>
            <div className="search-icons-container cursor-pointer">
              { 
              searchOpen
              ?
              <Tooltip title="search-icon">
                  <IconComponent        
                  icon={searchIconDir
                    ?
                    <RiSearchEyeLine 
                      style={{
                          color: colors.grey[100],
                          }}
                      id="iconSearch" 
                      onClick={openSearch} 
                      className="searchBtn cursor-pointer icon-q" 
                      fontSize="small" />
                    : 
                  <VscSearch 
                  style={{
                      color: colors.grey[100],
                      }}
                  id="iconSearch" onClick={openSearch} className="searchBtn cursor-pointer icon-q" fontSize="small" />
              } />
              </Tooltip>
              :
              <span onClick={closeSearch}>x</span>
              }
            </div>
          </div>
        </div>
        <Box className="projects-number flex flex-row justify-between items-center">
            <span>{categoryState}</span>
            <p><span>{t("dashboard.productList.projectsNumber")}</span> <span>{numState}</span></p>
        </Box> 
        <Box className="table-container w-full">
            <TableItemsContainer products={products} pageCount={pageCount} handlePageClick={handlePageClick} confirmDelete={confirmDelete} shortenText={shortenText} currentItems={currentItems} />
        </Box>
      </div>
    </div>
  );
};

export default ProductList;
