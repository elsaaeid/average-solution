import React, { useState } from "react";
import { toast } from "react-toastify";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import {
  changePassword,
  logout,
  RESET,
} from "../../../redux/features/auth/authSlice";
import { sendAutomatedEmail } from "../../../redux/features/email/emailSlice";
import Card from "../../global-components/card/Card";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../auth/password-input/PasswordInput";
import Spinner from "../Spinner";
import { useDispatch, useSelector } from "react-redux";
import {Box} from "@mui/material";
import { useTranslation } from "react-i18next";
 

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
      // Translation
      const { t } = useTranslation();

  useRedirectLoggedOutUser("/login");
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const { isLoading, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (!oldPassword || !password || !password2) {
      return toast.error("All fields are required");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      oldPassword,
      password,
    };

    const emailData = {
      subject: "Password Changed - Average",
      send_to: user.email,
      reply_to: "saidsadaoy@gmail.com",
      template: "changePassword",
      url: "/forgot",
    };

    await dispatch(changePassword(userData));
    await dispatch(sendAutomatedEmail(emailData));
    await dispatch(logout());
    await dispatch(RESET(userData));
    navigate("/login");
  };

  return (
      <section>
        <Box className="p-5">
          <h2>{t("changePassword")}</h2>
          <div className="--flex-start change-password">
            <Card cardClass={"card"}>
              <>
                <form onSubmit={updatePassword}>
                  <p>
                    <label>{t("curPass")}:</label>
                    <PasswordInput
                      placeholder="Old Password"
                      name="oldPassword"
                      value={oldPassword}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>{t("newPass")}:</label>
                    <PasswordInput
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>{t("confirmPass")}:</label>
                    <PasswordInput
                      placeholder="Confirm Password"
                      name="password2"
                      value={password2}
                      onChange={handleInputChange}
                    />
                  </p>
                  <Box className="flex justify-center items-center">
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <button
                      type="submit"
                      className="btn"
                    >
                      {t("changePassword")}
                    </button>
                  )}
                  </Box>
                </form>
              </>
            </Card>
          </div>
        </Box>
      </section>
  );
};

export default ChangePassword;