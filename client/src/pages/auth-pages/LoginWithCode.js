import React, { useEffect, useState } from "react";
import { GrInsecure } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../../components/global-components/card/Card";
import Loader from "../../components/global-components/Loader";
import Spinner from "../../components/global-components/Spinner";
import {Box} from '@mui/material';
import {
  loginWithCode,
  RESET,
  sendLoginCode,
} from "../../redux/features/auth/authSlice";
import styles from "./auth.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";




const LoginWithCode = () => {
  // Translation
  const { t } = useTranslation();
  
  // Login Code States
  const [loginCode, setLoginCode] = useState("");

  // Loading States
  const [loading, setLoading] = useState(false);

  // Email Params
  const { email } = useParams();
  // Use Dispatch
  const dispatch = useDispatch();
  // Use Navigate
  const navigate = useNavigate();
  // Use Theme 
  const theme = useTheme();

  // Theme Colors Mode
  const colors = tokens(theme.palette.mode);

  // Auth State select
  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  // Send User Login Code Function
  const sendUserLoginCode = async () => {
    await dispatch(sendLoginCode(email));
    await dispatch(RESET());
  };

  // Login User With Code Function
  const loginUserWithCode = async (e) => {
    e.preventDefault();
    
    if (loginCode === "") {
      return toast.error("Please fill in the login code");
    }
    if (loginCode.length !== 6) {
      return toast.error("Access code must be 6 characters");
    }
    setLoading(true);
    const code = {
      loginCode,
    };
    
    await dispatch(loginWithCode({ code, email }));
    setLoading(false);
  };

  // navigate Side Effect
  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/home");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);


  return (
    <div className={`${styles.auth} p-3`}>
      {isLoading ? (<Loader />)
      :
      (
      <Card>
        <div className={styles.form}>
          <div className="flex flex-col justify-center items-center">
            <GrInsecure size={35} 
             style={{
              color: colors.grey[500],
            }}
             />
            <h1>{t("profile.enterCode")}</h1>
          </div>
          <form onSubmit={loginUserWithCode}>
            <input
              type="text"
              placeholder="Access Code"
              required
              name="loginCode"
              value={loginCode}
              onChange={(e) => setLoginCode(e.target.value)}
            />
            <Box className="w-1/2 flex justify-center items-center">
            <button type="submit" className="btnX flex justify-center items-center w-full">
              {
                loading ? <Spinner />
                :
                  <span>{t("profile.proceedToLogin")}</span>
                }
            </button>
            </Box>
            <span className="flex justify-center items-center">
              {t("profile.checkCode")}
            </span>
            <div className={`flex justify-around items-center ${styles.links}`}>
              <p>
                <Link to="/home">{t("profile.home")}</Link>
              </p>
              <p onClick={sendUserLoginCode} className="v-link color-primary">
                <b>{t("profile.resentCode")}</b>
              </p>
            </div>
          </form>
        </div>
      </Card>
      )
    }
    </div>
  );
};

export default LoginWithCode;