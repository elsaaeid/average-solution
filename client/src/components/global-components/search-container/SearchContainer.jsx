import React from 'react';
import { styled } from '@mui/material/styles';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import {Box} from '@mui/material';
import { IoCloseSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";


export const SearchContainer = ({
  SearchChange, 
  SearchValue, 
  searchCloseHandle,
  openSearch
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);


  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "0.5rem",
  color: colors.grey[800],
  [theme.breakpoints.up('sm')]: {
    width: 600,
  },
}));


  return (
    <Box className='flex width-full justify-center search-input'>
        <Search className='search-content'>
          <input
            style={{
              position: 'absolute',
              color: colors.grey[900],
              width: "100%",
              height: "100%",
            }}
            id="search-input"
            placeholder=''
            onChange={SearchChange}
            value={SearchValue}
            type="search" />
            {
              openSearch ? <GoSearch id='search-icon' />
               : 
              <IoCloseSharp id='search-icon' onClick={searchCloseHandle} />
            }
        </Search>
    </Box>
  )
}
