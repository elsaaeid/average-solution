import React, { useEffect, useState } from "react";
import HeartRating from './HeartRating';
import {RiCloseFill} from "react-icons/ri";
import {Typography, IconButton} from '@mui/material';
import {NavLink} from "react-router-dom";
import DOMPurify from "dompurify";
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




const PortfolioContainer = () => {
  	// Translation
	const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  //Dropdown
  const [categoryState, setCategoryState] = useState("All");
  const [orderState, setOrderState] = useState("All");
  

  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const filteredProducts = useSelector(selectFilteredPoducts);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();


//getProducts
const { products } = useSelector(
  (state) => state.product
  );
  
  useEffect(() => {
    dispatch(getProducts());
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
  const [numState, setNumState] = useState(19);
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


  return (
    <div className="product-list">
    <div className="flex justify-between flex-col">
        <SearchContainer
         SearchChange={(e) => setSearch(e.target.value)}
         SearchValue={search}
        />
    </div>
    <div className="drop-down-menu">
      <DropdownTabs products={products} toggleTab={toggleTab} orderState={orderState} />
    </div>
    <div className="table flex justify-center items-center">
      {products.length === 0 ? (
        <p style={{
          color: colors.grey[100],
        }}>-- {t("portfolio.noProduct")}...</p>
      ) : (
        <Box>
        <Box className="projects-number flex flex-row justify-between items-center">
          <span>{categoryState}</span>
          <p><span>{t("portfolio.projectsNumber")}</span> <span>{numState}</span></p>
        </Box>
          <Box>
            {currentItems.map((product) => {
              const { _id, name, category, liveDemo } = product;
              return (
                  <Box key={_id} className={"orderState" ? "content active-content" : "content"}>
                    <article className='portfolio__item'>
                    <Box className="portfolio__item-image">
                    {product ? (product?.image ? (
                      <img
                        src={product.image.filePath}
                        alt={product.image.fileName}
                      />
                    ) : (
                      <p style={{
                        color: colors.grey[100],
                      }}>No image set for this product</p>
                    ) ) : null}
                    </Box>
                    <Box className="portfolio__item-details ">
                        <Typography variant='h6'>{shortenText(name, 16)}</Typography>
                        <NavLink
                        className='view-btn btn' 
                        underline="none"
                        onClick={handleClick}
                        aria-controls={opened ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={opened ? 'true' : undefined}
                        >{t("portfolio.viewDetails")}
                        </NavLink>
                    </Box>
                    {
                        anchorEl &&
                      <Box className={anchorEl ? 'details_Active details flex flex-col justify-center items-center' : 'details flex flex-col justify-center items-center'}
                          anchorEl={anchorEl}
                          open={opened}
                          onClose={handleClose}
                          onClick={handleClose}
                      >
                          <Box className="portfolio__item-icon" onClick={handleClose}>
                              <IconButton><RiCloseFill /></IconButton>
                          </Box>
                          <Box className="portfolio__item-details ">
                              <div
                              dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(product.description),
                              }}
                              ></div>
                          </Box>
                          <Box>{t("portfolio.foundIn")}<p>{category}</p></Box>
                          <Box className="portfolio__item-cta ">
                              <NavLink to={liveDemo} 
                              underline="none"
                              className="btn btn-primary"
                              >{t("portfolio.demoLive")}
                              </NavLink>
                          </Box>
                          <IconButton><HeartRating /></IconButton>
                      </Box>
                      }
                    </article>
                  </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </div>
  {/* pagination */}
     <ReactPaginate
          className="pagination flex flex-row justify-around items-center"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
</div>
  );
};

export default PortfolioContainer;