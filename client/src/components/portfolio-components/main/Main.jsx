import React from 'react';
import './main.css';
import CTA from './CTA';
import {Box} from '@mui/material';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";



function Main({ t, btnState, btnHandling }) {
   const theme = useTheme();
  const colors = tokens(theme.palette.mode);
        return (
      <main 
      className="w-full flex justify-between items-center flex-row">
        <Box className='main__container flex justify-center items-center flex-row'>
          <Box
          style={{
            background: colors.grey[900],
          }}
          className="intro flex items-center">
            <Box
            className='intro-para w-2/4'>
              <CTA t={t} btnState={btnState} btnHandling={btnHandling} />
            </Box>
            <Box id="greay-box-content" className="greay-box-content overlay flex justify-center flex-col items-center">
              <Box class="overlay">
              </Box>
            </Box>         
          </Box>
        </Box>
      </main> 
            )
        }
export default Main;