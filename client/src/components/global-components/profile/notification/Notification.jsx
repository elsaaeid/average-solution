import React from "react";
import { useDispatch } from "react-redux";
import {
  RESET,
  sendVerificationEmail,
} from "../../../../redux/features/auth/authSlice";
import "./Notification.scss";
import {Box} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { tokens } from "../../../../theme";

const Notification = () => {
  const dispatch = useDispatch();
  // Translation
  const { t } = useTranslation();
      const theme = useTheme();
 const colors = tokens(theme.palette.mode); 
  const sendVerEmail = async () => {
    await dispatch(sendVerificationEmail());
    await dispatch(RESET());
  };

  return (
      <div 
      style={{
              background: colors.grey[900],
            }}
      className="alert p-5">
      <Box 
      style={{
        color: colors.grey[100],
      }}
      className="flex flex-col justify-center items-center">
          <p className="mb-3">
          <b>{t("n.message")}:</b> &nbsp;
        </p>
        <p>
          {t("n.para")}
          &nbsp;
        </p>
        <p className="btn mt-3" onClick={sendVerEmail}>
          
        {t("n.resend")}
        </p>
      </Box>
      </div>
  );
};

export default Notification;