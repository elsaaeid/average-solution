import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";
import {BACKEND_URL} from "../../../redux/helper";
import {LuHeartHandshake} from "react-icons/lu";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
const API_URL = `${BACKEND_URL}/api/contactus`;

const CartItem = ({
    selectedServices, 
    handleCheckboxChange,
    servicesItem,
})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 
// Translation
    const { t } = useTranslation();
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const data = {
        service,
        message,
    };
    const sendEmail = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post(API_URL, data);
        setService("");
        setMessage("");
        toast.success(response.data.message);
        } catch (error) {
            console.log(error);
        toast.error("User not found, please signup");
        }
    };
  
    return(
        <form onSubmit={sendEmail}>
            <label>{t("homeContainer.select")}</label>
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
                
            <br />
            <label>{t("dashboard.Message")}</label>
            <textarea
                style={{
                    color: colors.grey[500],
                }}
                placeholder={t("contact.message")}
                cols="30"
                rows="10"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn flex justify-center items-center flex-row mt-3">
                <span className="mr-1">
                    <LuHeartHandshake />
                </span>
                {t("contact.sendMessage")}
            </button>
        </form>
    )
}
export default CartItem;