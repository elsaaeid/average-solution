import React from "react";
import { useDispatch } from "react-redux";
import {
  RESET,
  sendVerificationEmail,
} from "../../../../redux/features/auth/authSlice";
import "./Notification.scss";
import {Box} from "@mui/material";
import { useTranslation } from "react-i18next";


const Notification = () => {
  const dispatch = useDispatch();
  // Translation
  const { t } = useTranslation();
  const sendVerEmail = async () => {
    await dispatch(sendVerificationEmail());
    await dispatch(RESET());
  };

  return (
      <div className="alert p-5">
      <Box className="flex flex-col justify-center items-center">
          <p>
          <b>{t("n.message")}:</b> &nbsp;
        </p>
        <p>
          {t("n.para")}
          &nbsp;
        </p>
        <p className="btn" onClick={sendVerEmail}>
          
        {t("n.resend")}
        </p>
      </Box>
      </div>
  );
};

export default Notification;