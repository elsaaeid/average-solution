import React, {useState, useEffect} from 'react';
import {Box, Tooltip} from '@mui/material';
import {AccountMenu} from "./AccountMenu";
import {IconComponent} from './IconComponent';
import "./header.css"
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import DropdownServices from "./DropdownServices";
import {NotificationMenu} from "./NotificationMenu";
import LanguageMenu from '../../../translation/LanguageMenu';      
import { ThemeModeIcon } from '../ThemeModeIcon';
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ShowOnLogin } from "../protect/HiddenLink";
import HeaderSearch from './HeaderSearch';
import { ServiceShoppingContent } from "./ServiceShoppingContent";



export const Bar = ({
    profile,
    activeNav,
    setActiveNav,
    imagePreview,
    toggleTab,
    joinState,
    setJoinState,
    selectedServices,
    handleCheckboxChange,
    servicesItem,
    quantity,
})=>{
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
            <ServiceShoppingContent 
                selectedServices={selectedServices}
                handleCheckboxChange={handleCheckboxChange}
                servicesItem={servicesItem}
                quantity={quantity}
            />
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
            <AccountMenu 
                joinState={joinState}
                setJoinState={setJoinState}
                toggleTab={toggleTab}
                profile={profile} 
                imagePreview={imagePreview} />
        </div>
    )
}

export const MobileBar =({
    toggleVariants,
    handleToggle,
    joinState,
    setJoinState,
    toggleTab,
    imagePreview,
    profile,
    selectedServices,
    handleCheckboxChange,
    servicesItem,
    quantity,
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
                <ServiceShoppingContent 
                    selectedServices={selectedServices}
                    handleCheckboxChange={handleCheckboxChange}
                    servicesItem={servicesItem}
                    quantity={quantity}
                />
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
export const HeaderIcons = ({ 
    profile,
    activeNav,
    setActiveNav,
    toggleVariants,
    handleToggle,
    selectedServices,
    handleCheckboxChange,
    servicesItem,
    quantity,
    joinState,
    setJoinState,
    toggleTab,
    imagePreview,
})=> {
    
        return (
                <Box className='header__icons w-1/2 flex justify-between items-center'>
                    <Bar 
                        profile={profile}
                        activeNav={activeNav}
                        setActiveNav={setActiveNav}
                        imagePreview={imagePreview}
                        toggleTab={toggleTab}
                        joinState={joinState}
                        setJoinState={setJoinState}
                        selectedServices={selectedServices}
                        handleCheckboxChange={handleCheckboxChange}
                        servicesItem={servicesItem}
                        quantity={quantity}
                        />
                        <MobileBar 
                            toggleVariants={toggleVariants}
                            handleToggle={handleToggle}
                            joinState={joinState}
                            setJoinState={setJoinState}
                            toggleTab={toggleTab}
                            imagePreview={imagePreview}
                            profile={profile}
                            selectedServices={selectedServices}
                            handleCheckboxChange={handleCheckboxChange}
                            servicesItem={servicesItem}
                            quantity={quantity}
                            />
                </Box>
        )
    }