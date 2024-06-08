import React, { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import {AccountMenu} from "./AccountMenu";
import {IconComponent} from './IconComponent';
import DropdownServices from "./DropdownServices";
import {NotificationMenu} from "./NotificationMenu";
import LanguageMenu from '../../../translation/LanguageMenu';      
import { ThemeModeIcon } from '../ThemeModeIcon';
import { ShowOnLogin } from "../protect/HiddenLink";
import HeaderSearch from './HeaderSearch';
import { ServiceShoppingContent } from "./ServiceShoppingContent";




export const Bar = ()=>{
    // search Icon Direction State
    const [searchIconDir, setSearchIconDir] = useState(true);
    // Search Open State
    const [searchOpen, setSearchOpen] = useState(false);
    // open Header Search state
    const [openHeaderSearch, setOpenHeaderSearch] = useState(true);
    // search Value State
    const [searchVal, setSearchVal] = useState("");

    // search Icon Direction Side Effect
    useEffect(() => {
        if(document.body.dir === "ltr") {
            setSearchIconDir(true);
        }
        else if(document.body.dir === "rtl") {
            setSearchIconDir(false);
        }
    }, []);

    // open Search Function
    const openSearch = ()=> {
    setSearchOpen(true)
    };
    // close Search Function
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
                    <DropdownServices />
                </div>
            </Tooltip>
            <ServiceShoppingContent />
            <Tooltip title="Mode">
                <IconComponent        
                icon={<ThemeModeIcon className="icon-q" zIndex="30" fontSize="small" />} />
            </Tooltip>
            <ShowOnLogin>
                <Tooltip title="Notification">
                    <IconComponent        
                    icon={<NotificationMenu />} />
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
            <AccountMenu />
        </div>
    )
}