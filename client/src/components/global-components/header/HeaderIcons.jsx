import React from 'react';
import {Box} from '@mui/material';
import { Bar } from './Bar';
import { MobileBar } from './MobileBar';



export const HeaderIcons = ({ 
    toggleVariants,
    handleToggle,
})=> {
    
        return (
                <Box className='header__icons w-1/2 flex justify-between items-center'>
                    <Bar />
                    <MobileBar 
                        toggleVariants={toggleVariants}
                        handleToggle={handleToggle}
                    />
                </Box>
            )
    }