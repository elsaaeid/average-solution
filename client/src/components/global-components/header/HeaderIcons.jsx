import React, {useState, useEffect} from 'react';
import {Box, Tooltip} from '@mui/material';
import {AccountMenu} from "./AccountMenu";
import {RiSearchEyeLine} from "react-icons/ri";
import {VscSearch} from "react-icons/vsc";
import {IconComponent} from './IconComponent';
import "./header.css"
import SearchContent from "./SearchContent";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import DropdownServices from "./DropdownServices";
import {NotificationMenu} from "./NotificationMenu";
import LanguageMenu from '../../../translation/LanguageMenu';      
import { ThemeModeIcon } from '../ThemeModeIcon';
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ShowOnLogin } from "../protect/HiddenLink";




export const Bar = ({
    profile,
    activeNav,
    setActiveNav,
})=>{
    return(
        <div className="flex basic-menu flex-row justify-center items-center">
            <Tooltip>
                <div className="drop-down-menu mr-2">
                    <LanguageMenu />
                </div>
            </Tooltip>
            <Tooltip title="Services">
                <div className="drop-down-menu">
                    <DropdownServices
                    activeNav={activeNav}
                    setActiveNav={setActiveNav}
                    />
                </div>
            </Tooltip>
            <Tooltip title="Mode">
                <IconComponent        
                icon={<ThemeModeIcon className="icon-q" zIndex="30" fontSize="small" />} />
            </Tooltip>
            <ShowOnLogin>
                <Tooltip title="Notification">
                    <IconComponent        
                    icon={<NotificationMenu profile={profile} />} />
                </Tooltip>
            </ShowOnLogin>
        </div>
    )
}
export const HeaderIcons = ({ 
    profile,
    activeNav,
    setActiveNav,
    imagePreview,
    toggleTab,
    joinState,
    setJoinState,
    toggleVariants,
    handleToggle })=> {
    const [searchIconDir, setSearchIconDir] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [openHeaderSearch, setOpenHeaderSearch] = useState(true);


    useEffect(() => {
        if(document.body.dir === "ltr") {
            setSearchIconDir(true);
        }
        else if(document.body.dir === "rtl") {
            setSearchIconDir(false);
        }
    }, [])

    const [searchVal, setSearchVal] = useState("");
    //searchContentAnimation
    
    const openSearch = ()=> {
    setSearchOpen(true)
    }
    const closeSearch = ()=> {
        setSearchOpen(false);
        setSearchVal("");
        setOpenHeaderSearch(true);
    }

        return (
                <Box className='header__icons flex justify-between items-center'>
                    <Tooltip title="search-icon">
                        <IconComponent        
                        icon={searchIconDir
                         ? 
                        <RiSearchEyeLine 
                        style={{
                            color: colors.grey[100],
                            }}
                        id="iconSearch" onClick={openSearch} className="searchBtn cursor-pointer icon-q" fontSize="small" />
                         : 
                        <VscSearch 
                        style={{
                            color: colors.grey[100],
                            }}
                        id="iconSearch" onClick={openSearch} className="searchBtn cursor-pointer icon-q" fontSize="small" />
                    } />
                    </Tooltip>
                    <div className={searchOpen ? "searchBox-active searchBox" : "searchBox"} title="search"> 
                        <SearchContent 
                            searchVal={searchVal} 
                            setSearchVal={setSearchVal} 
                            closeSearch={closeSearch}  
                            searchOpen={searchOpen}
                            openHeaderSearch={openHeaderSearch}
                            setOpenHeaderSearch={setOpenHeaderSearch}
                        />
                    </div>
                    <Bar 
                        activeNav={activeNav}
                        setActiveNav={setActiveNav}
                        profile={profile} />
                    <AccountMenu 
                        joinState={joinState}
                        setJoinState={setJoinState}
                        toggleTab={toggleTab}
                        profile={profile} 
                        imagePreview={imagePreview} />
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