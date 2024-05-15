import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import DOMPurify from "dompurify";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import "./productList.scss";


const columns = [
  { id: 'id', label: 'Id' },
  { id: 'name', label: 'Name' },
  {
    id: 'image',
    label: 'Image',
  },
  {
    id: 'category',
    label: 'Category',
  },
  {
    id: 'liveDemo',
    label: 'Live Demo',
  },
  {
    id: 'description',
    label: 'Description',
  },
  {
    id: 'action',
    label: 'Action',
  },
];



export default function TableItemsContainer({products, pageCount, handlePageClick, currentItems, shortenText, confirmDelete}) {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <div className="table w-full">
        {products.length === 0 ? (
          <p>-- No product found, please add a product...</p>
        ) : (
          <table>
            <thead>
              <tr>
              {columns.map((column) => (
                <th
                  style={{
                    color: colors.grey[100],
                  }}
                  key={column.id}
                >
                  {column.label}
                </th>
              ))}
              </tr>
            </thead>

            <tbody>
              {currentItems.map((product, index) => {
                const { _id, name, category, liveDemo } = product;
                return (
                  <tr key={_id}>
                    <td style={{
                      color: colors.grey[100],
                    }}>{index + 1}</td>
                    <td style={{
                      color: colors.grey[100],
                    }}>{shortenText(name, 16)}</td>
                    <td  style={{
                      color: colors.grey[100],
                    }}>
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
                    </td>
                    <td style={{
                      color: colors.grey[100],
                    }}>{category}</td>
                    <td align="right"><Link to={liveDemo}>{liveDemo}</Link></td>
                    <td align="right">
                      <div dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(product.description),
                      }}
                      ></div>
                    </td>
                    <td style={{
                      color: colors.grey[100],
                    }} className="icons">
                      <span>
                        <Link to={`/edit-product/${_id}`}>
                          <FaEdit size={20} color={"green"} />
                        </Link>
                      </span>
                      <span>
                        <FaTrashAlt
                          size={20}
                          color={"red"}
                          onClick={() => confirmDelete(_id)}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        </div>
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
      </TableContainer>
    </Paper>
  );
}