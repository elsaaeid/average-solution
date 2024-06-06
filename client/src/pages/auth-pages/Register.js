import React, { useState, useEffect } from "react";
import styles from "./auth.module.scss";
import { TiUserAddOutline } from "react-icons/ti";
import Card from "../../components/global-components/card/Card";
import { BsCheck2All } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/global-components/Spinner";
import {Box} from '@mui/material';
import PasswordInput from "../../components/global-components/auth/password-input/PasswordInput";
import { validateEmail } from "../../redux/features/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  RESET,
  sendVerificationEmail,
} from "../../redux/features/auth/authSlice";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";



const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};


const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;
// Translation
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return timesIcon;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check Lower and Uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }
    // Check for numbers
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }
    // Check for special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
    // Check for PASSWORD LENGTH
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }
    const userData = {
      name,
      email,
      password,
    }
    // console.log(userData);
    await dispatch(register(userData));
    await dispatch(sendVerificationEmail());
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/login");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);
  return (
    <div className={`${styles.auth} p-3`}>
        <div className={styles.form}
          style={{
            backgroundColor: colors.grey[900],
          }}
        >
          <div className="flex flex-col justify-center items-center mb-2">
            <TiUserAddOutline size={35} 
            style={{
              color: colors.grey[500],
            }}
            />
            <h1
            style={{
              color: colors.grey[500],
            }}
            >{t("profile.signUp")}</h1>
          </div>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <PasswordInput 
              name="password" 
              placeholder="Enter Password"
              value={password} 
              handleInputChange={handleInputChange} 
            />
            <PasswordInput 
                name="password2" 
                placeholder="Confirm Password"
                value={password2} 
                handleInputChange={handleInputChange}
                onPaste={(e) => {
                  e.preventDefault();
                  toast.error("Cannot paste into input field");
                  return false;
                }}
              />
            {/* Password Strength */}
            <Card cardClass={styles.group}>
              <ul className="form-list">
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(uCase)}
                    &nbsp; Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(num)}
                    &nbsp; Number (0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(sChar)}
                    &nbsp; Special Character (!@#$%^&*)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(passLength)}
                    &nbsp; At least 6 Character
                  </span>
                </li>
              </ul>
            </Card>
            <Box className="flex justify-center items-center mt-5">
            <button type="submit" className="tabs flex justify-center items-center w-full">
              {
                isLoading ? <Spinner />
                :
                <span
                >{t("profile.signUp")}</span>
              }
            </button>
            </Box>
          </form>
          <div className="flex flex-row justify-center items-center mt-5">
            <span className={styles.links}>
              <Link to="/home"
               style={{
                color: colors.grey[500],
              }}
              >{t("profile.home")}</Link>
            </span>
          </div>
        </div>
    </div>
  );
};

export default Register;