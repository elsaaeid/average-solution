import React, { useState } from "react";
import styles from "./auth.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/global-components/Spinner";
import {Box} from '@mui/material';
import { validateEmail } from "../../redux/features/auth/authService";
import { forgotPassword } from "../../redux/features/auth/authSlice";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";


const Forgot = () => {
  // Translation
       const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    setIsLoading(true);
    const userData = {
      email,
    };
  
    await dispatch(forgotPassword(userData));
    setEmail("");
    setIsLoading(false);
  };


  return (
    <div className={`container ${styles.auth} p-3`}>
      <div className={styles.form}>
        <div className="flex justify-center items-center">
          <AiOutlineMail size={35} color="#ffff" />
        </div>
        <h1>{t("profile.forgotPassword")}</h1>

        <form onSubmit={forgot}>
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box className="flex justify-center items-center">
          <button type="submit" className="btnX flex justify-center items-center w-full">
            {
              isLoading ? <Spinner />
              :
              <span>{t("profile.resetPassword")}</span>
              }
          </button>
          </Box>
          <div className="mt-5 mb-5 flex flex-row justify-around items-center">
            <span className={styles.links_clChange}>
              <Link to="/">{t("profile.home")}</Link>
            </span>
            <span className={styles.links}>
              <Link to="/login">{t("profile.Login")}</Link>
            </span>
          </div>
        </form>
      </div>
  </div>
  );
};

export default Forgot;