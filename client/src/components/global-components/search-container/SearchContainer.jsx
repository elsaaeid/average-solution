import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import {Box, IconButton, Tooltip} from '@mui/material';
import {IconComponent} from '../header/IconComponent';






export const SearchContainer = ({SearchChange, SearchValue}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: colors.grey[300],
  color: colors.grey[800],
  '&:hover': {
    backgroundColor: colors.grey[500],
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

  return (
    <Box className='flex width-full justify-center search-input'>
        <Search className='search-content'>
          <Tooltip title="search">
            <IconButton>
              <IconComponent        
                icon={
                    <SearchIcon />
                      } />
            </IconButton>
          </Tooltip>
            <StyledInputBase
              style={{
                color: colors.grey[900],
              }}
                onChange={SearchChange}
                value={SearchValue}
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    </Box>
  )
}
