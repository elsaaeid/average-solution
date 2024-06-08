import React, {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import {AccountMenu} from "./AccountMenu";
import "./header.css"
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import HeaderSearch from './HeaderSearch';
import { ServiceShoppingContent } from "./ServiceShoppingContent";





export const MobileBar =({
    toggleVariants,
    handleToggle,
})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [searchIconDir, setSearchIconDir] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false);
    const [openHeaderSearch, setOpenHeaderSearch] = useState(true);
    const [searchVal, setSearchVal] = useState("");

    useEffect(() => {
        if(document.body.dir === "ltr") {
            setSearchIconDir(true);
        }
        else if(document.body.dir === "rtl") {
            setSearchIconDir(false);
        }
    }, [])

    const openSearch = ()=> {
    setSearchOpen(true)
    }
    const closeSearch = ()=> {
        setSearchOpen(false);
        setSearchVal("");
        setOpenHeaderSearch(true);
    }
    return(
        <Box className="mobile-bar w-full flex flex-row justify-between items-center">
            <HeaderSearch 
                searchIconDir={searchIconDir} 
                searchVal={searchVal}
                searchOpen={searchOpen}
                openSearch={openSearch}
                closeSearch={closeSearch}
                openHeaderSearch={openHeaderSearch}
                setSearchVal={setSearchVal}
                setOpenHeaderSearch={setOpenHeaderSearch}
                />
                <ServiceShoppingContent />
            <AccountMenu />
        <Box   
            onClick={handleToggle}          
            className='toggle cursor-pointer'>
        {
            toggleVariants
            ?
            <FaBarsStaggered style={{
                color: colors.grey[100],
                }} />
            :
            <AiOutlineCloseCircle style={{
                color: colors.grey[100],
                }} />
        }
        </Box>
        </Box>
    )
}