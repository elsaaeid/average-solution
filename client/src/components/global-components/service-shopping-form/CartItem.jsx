import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";
import {LuHeartHandshake} from "react-icons/lu";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { ServiceCheckBox } from "./ServiceCheckBox";
import { Context } from "../../../context/Context";
const API_URL = `${process.env.BACKEND_URL}/api/contactus`;

const CartItem = ()=>{
    // App Context
    const {service, setService} = useContext(Context);
    // Theme Colors Mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 
    // Translation
    const { t } = useTranslation();
    // Message States
    const [message, setMessage] = useState("");
    // Form data
    const data = {
        service,
        message,
    };

    // SendEmail Function
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
            <ServiceCheckBox />
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