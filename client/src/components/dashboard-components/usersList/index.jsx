import React, {useState, useEffect} from 'react';
import {SearchContainer} from "../../global-components/search-container/SearchContainer";
import ChangeRole from "../changeRole/ChangeRole";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../redux/features/auth/authSlice";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  FILTER_USERS,
  selectUsers
} from "../../../redux/features/auth/filterSlice";
import ReactPaginate from "react-paginate";
import  Loader from "../../global-components/Loader";
import Header from "../Header";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';


const columns = [
  { id: 's/n', label: 's/n' },
  { id: 'name', label: 'Name' },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'role',
    label: 'Role',
  },
  {
    id: 'changeRole',
    label: 'Change Role',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

const UsersList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { users, isLoading } = useSelector(
    (state) => state.auth
  );
  const filteredUsers = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const removeUser = async (id) => {
    await dispatch(deleteUser(id));
    dispatch(getUsers());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete This User",
      message: "Are you sure to do delete this user?",
      buttons: [
        {
          label: "Delete",
          onClick: () => removeUser(id),
        },
        {
          label: "Cancel",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(FILTER_USERS({ users, search }));
  }, [dispatch, users, search]);

  // Begin Pagination
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredUsers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;
    setItemOffset(newOffset);
  };

  // End Pagination
  return (
    <div className="user-list w-full">
    {isLoading && <Loader />}
    <Header title="All Users" />
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <div className="table w-full">
          <div className="flex flex-col">
              <SearchContainer
                SearchChange={(e) => setSearch(e.target.value)}
                SearchValue={search}
              />
          </div>
          {/* Table */}
          {!isLoading && users.length === 0 ? (
            <p>No user found...</p>
          ) : (
            <table className='w-full overflow-x-scroll'>
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
                {currentItems.map((user, index) => {
                  const { _id, name, email, role } = user;

                  return (
                    <tr
                    style={{
                      color: colors.grey[100],
                    }}
                    key={_id}>
                      <td
                      style={{
                        color: colors.grey[100],
                      }}
                      >{index + 1}</td>
                      <td
                      style={{
                        color: colors.grey[100],
                      }}
                      >{name}</td>
                      <td
                      style={{
                        color: colors.grey[100],
                      }}
                      >{email}</td>
                      <td
                      style={{
                          color: colors.grey[100],
                        }}
                      >{role}</td>
                      <td
                      style={{
                          color: colors.grey[100],
                        }}
                      >
                        <ChangeRole _id={_id} email={email} />
                      </td>
                      <td 
                      style={{
                        color: colors.grey[100],
                      }}
                      className="flex justify-center items-center">
                        <span>
                          <FaTrashAlt
                            size={20}
                            color="red"
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
          <hr />
        </div>
        <ReactPaginate
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
  </div>
  )
}

export default UsersList