import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./auth.module.scss";
import { MdPassword } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RESET, resetPassword } from "../../redux/features/auth/authSlice";
import PasswordInput from "../../components/global-components/auth/password-input/PasswordInput";
import Spinner from "../../components/global-components/Spinner";
import Loader from "../../components/global-components/Loader";
import {Box} from '@mui/material';
import { useTranslation } from "react-i18next";


const initialState = {
  password: "",
  password2: "",
};

const Reset = () => {
  // Translation
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;
  const { resetToken } = useParams();
  const [loading, setLoading] = useState(false);
  console.log(resetToken);

  const { isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }
    setLoading(true);
    const userData = {
      password,
    };

    await dispatch(resetPassword({ userData, resetToken }));
    setLoading(false);
  };

  useEffect(() => {
    if (isSuccess && message.includes("Reset Successful")) {
      navigate("/login");
    }

    dispatch(RESET());
  }, [dispatch, navigate, message, isSuccess]);

  return (
    <div className={`container ${styles.auth} p-3`}>
      {isLoading && <Loader />}
      <div className={styles.form}>
        <div className="flex justify-center items-center">
          <MdPassword size={35} color="#ffff" />
        </div>
        <h1>{t("profile.resetPassword")}</h1>

        <form onSubmit={reset}>
          <PasswordInput 
              name="password" 
              placeholder="Enter password"
              value={password} 
              handleInputChange={handleInputChange} 
            />
          <PasswordInput 
              name="password2" 
              placeholder="Confirm Password"
              value={password2} 
              handleInputChange={handleInputChange} 
            />

            <Box className="flex justify-center items-center">
              <button type="submit" className="btnX flex justify-center items-center w-full">
                {
                  loading ? <Spinner />
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

export default Reset;