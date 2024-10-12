import React, { useEffect, useState } from "react";
import {Tooltip} from '@mui/material';
import {IconComponent} from '../../../components/global-components/header/IconComponent';
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_PRODUCTS,
  selectFilteredPoducts,
} from "../../../redux/features/product/filterSlice";
import ReactPaginate from "react-paginate";
import "react-confirm-alert/src/react-confirm-alert.css";
import { getProducts } from "../../../redux/features/product/productSlice";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";
import { SearchContainer } from "../../../components/global-components/search-container/SearchContainer";
import DropdownTabs from "../../../components/global-components/DropdownTabs";
import {
  CALC_CATEGORY,
} from "../../../redux/features/product/productSlice";
import { useTranslation } from "react-i18next";
import {RiSearchEyeLine} from "react-icons/ri";
import {VscSearch} from "react-icons/vsc";
const LazyCardPortfolio = lazy(() => import { CardPortfolio } from "./CardPortfolio");
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Spinner from "../../../components/global-components/Spinner";
import useMemo from "react";



const PortfolioContainer = () => {
  	// Translation
	const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  //Dropdown
  const [categoryState, setCategoryState] = useState("All");
  const [orderState, setOrderState] = useState("All");
  
  // open Portfolio Search
  const [openPortfolioSearch, setOpenPortfolioSearch] = useState(true);

  // direction of web page
  const [searchIconDir, setSearchIconDir] = useState(true);

  // open search
  const [searchOpen, setSearchOpen] = useState(true);
  // rotate icon of view details
  const [rotate, setRotate] = useState(null);

  const handleViewDetails = (productId) => {
    setSelectedProduct((prevId) => (prevId === productId ? null : productId));
    setRotate((prevId) => (prevId === productId ? null : productId))
  };
  const filteredProducts = useSelector(selectFilteredPoducts);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();


//getProducts
const { products } = useSelector(
  (state) => state.product
  );
  const allProducts = useMemo(() => getProducts(products), [products]);
	
  useEffect(() =>   
    dispatch(allProducts());
  }, [dispatch]);
  


  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

// calculate products
useEffect(() => {
  dispatch(CALC_CATEGORY(products));
}, [dispatch, products]);

// const productsLength = products.length;
  // console.log(productsLength)
  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ products, search }));
  }, [products, search, dispatch]);
  
  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [numState, setNumState] = useState(products.length || null);
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


   //Dropdown
 const toggleTab = (category, num, order, filterTap) => {
  setCategoryState(category);
  setNumState(num);
  setOrderState(order);
  setCurrentItems(filterTap);
};
  //End Dropdown


// search change 
const SearchChange = (e)=> {
  setSearch(e.target.value);
 };

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

const openSearch = ()=> {
    setSearchOpen(false)
    }
    const closeSearch = ()=> {
        setSearchOpen(true);
        setSearch("");
        setOpenPortfolioSearch(true);
    };
  return (
    <div className="product-list flex flex-col items-center justify-center w-full">
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
          <span style={{
          color: colors.grey[100],
          }}
          onClick={closeSearch}>x</span>
          }
        </div>
      </div>
    </div>
    <div className="port-container w-full flex justify-center items-center">
      {products.length === 0 ? (
        <Spinner />
      ) : (
        <Box>
        <Box 
          style={{
            color: colors.grey[500],
          }}
          className="projects-number mb-3 flex flex-row justify-around items-center">
          <span>{categoryState}</span>
          <p><span>{t("portfolio.projectsNumber")}</span> <span>{numState}</span></p>
        </Box>
          <Grid className="row mt-5" container justifyContent="center" spacing={4}>
            {currentItems.map((product) => {
              const { _id, name, category, liveDemo } = product;
              return (
                <Grid 
                  xs={12} sm={6} md={6} lg={6} 
                  className={orderState ? "content-portfolio active-content" : "content-portfolio"}>
                  <LazyCardPortfolio
                    id={product._id}
                    key={_id}
                    product={product}
                    currentItems={currentItems}
                    rotate={rotate}
                    handleViewDetails={() => handleViewDetails(product._id)}
                    selectedProduct={selectedProduct}
                    name={name}
                    category={category}
                    liveDemo={liveDemo}
                    shortenText={shortenText}
                    />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </div>
  {/* pagination */}
     <ReactPaginate
          className={`pagination flex flex-row justify-around items-center`}
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="item activePage"
          previousLabel={<ArrowBackIosIcon style={{ color: colors.grey[500], fontSize: 18, width: 50 }} />}
          nextLabel={<ArrowForwardIosIcon style={{ color: colors.grey[500], fontSize: 18, width: 50 }} />}
          breakClassName={'item break-me'}
          disabledClassName={'disabled-page'}
          marginPagesDisplayed={2}
          nextClassName={"item next"}
          pageClassName={'item pagination-page'}
          previousClassName={"item previous"}
        />
    </div>
  );
};

export default React.memo(PortfolioContainer);
