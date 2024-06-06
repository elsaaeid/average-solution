import { Box } from "@mui/material";
import {RiSearchEyeLine} from "react-icons/ri";
import {VscSearch} from "react-icons/vsc";
import SearchContent from "./SearchContent";
import {Tooltip} from '@mui/material';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import {IconComponent} from './IconComponent';

const HeaderSearch = ({
    searchIconDir,
    searchVal,
    setSearchVal,
    searchOpen,
    openSearch,
    closeSearch,
    openHeaderSearch,
    setOpenHeaderSearch
})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box>
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
        </Box>
    )
}
export default HeaderSearch;