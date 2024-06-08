import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

export const ServiceCheckBox = ()=> {
    // Theme Colors Mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 

    // App Context
    const { 
        selectedServices, 
        handleCheckboxChange, 
        servicesItem, 
        service, 
        setService,
     } = useContext(Context);
    return(
        <ul className="service-checkBox w-1/2 flex flex-col justify-center items-center">
            {servicesItem.map((item, id)=>
            <li key={id} className="w-full flex flex-col justify-center">
            {
                (
                <FormControlLabel
                    control={
                        <Checkbox
                            value={service}
                            name="service"
                            style={{
                                    color: colors.grey[500],
                                }}
                            checked={selectedServices.includes(item.id)}
                            onChange={() => {
                                handleCheckboxChange(item.id);
                                setService(item.name);
                            }}
                    />
                }
                label={item.name} />
                )
            }
            </li>
            )}
        </ul>
    )
}