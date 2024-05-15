import React, {useState, useEffect} from 'react';
import {Box, Tooltip} from '@mui/material';
import {AccountMenu} from "./AccountMenu";
import {RiSearchEyeLine} from "react-icons/ri"
import {IconComponent} from './IconComponent';
import "./header.css"
import {VscSearch} from "react-icons/vsc";
import SearchContent from "./SearchContent";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import DropdownServices from "./DropdownServices";
import {NotificationMenu} from "./NotificationMenu";
import LanguageMenu from '../../../translation/LanguageMenu';      
import { ThemeModeIcon } from '../../dashboard-components/ThemeModeIcon';
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";


export const Bar = ({profile})=>{
    return(
        <div className="flex basic-menu flex-row justify-center items-center">
            <Tooltip>
                <div className="drop-down-menu mr-2">
                    <LanguageMenu />
                </div>
            </Tooltip>
            <Tooltip title="Services">
                <div className="drop-down-menu">
                    <DropdownServices />
                </div>
            </Tooltip>
            <Tooltip title="Mode">
                <IconComponent        
                icon={<ThemeModeIcon className="icon-q" zIndex="30" fontSize="small" />} />
            </Tooltip>
            <Tooltip title="Notification">
                <IconComponent        
                icon={<NotificationMenu profile={profile} />} />
            </Tooltip>
        </div>
    )
}
export const HeaderIcons = ({ 
     profile,
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



    useEffect(() => {
        if(document.body.dir === "ltr") {
            setSearchIconDir(true);
        }
        else if(document.body.dir === "rtl") {
            setSearchIconDir(false);
        }
    }, [])

    
    //searchContentAnimation
    
    const openSearch = ()=> {
    setSearchOpen(true)
    }
    const closeSearch = ()=> {
        setSearchOpen(false)
    }

        return (
                <Box className='header__icons flex justify-between items-center'>
                    <Bar profile={profile} />
                    <Tooltip title="search-icon">
                        <IconComponent        
                        icon={searchIconDir
                         ? 
                        <RiSearchEyeLine 
                        style={{
                            color: colors.grey[900],
                            }}
                        id="iconSearch" onClick={openSearch} className="searchBtn cursor-pointer icon-q" fontSize="small" />
                         : 
                        <VscSearch 
                        style={{
                            color: colors.grey[900],
                            }}
                        id="iconSearch" onClick={openSearch} className="searchBtn cursor-pointer icon-q" fontSize="small" />
                    } />
                    </Tooltip>
                    <div className={searchOpen ? "searchBox-active flex flex-col justify-between searchBox" : "flex flex-col justify-between searchBox"} title="search"> 
                        <div className='flex flex-row justify-between'>
                            <SearchContent closeSearch={closeSearch}  searchOpen={searchOpen} />
                        </div>
                    </div>
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
                            color: colors.grey[900],
                            }} />
                        :
                        <AiOutlineCloseCircle style={{
                            color: colors.grey[900],
                            }} />
                    }
                    </Box>
                </Box>
        )
    }