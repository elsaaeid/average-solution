import React from "react";
import "./Profile.scss";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom"
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { useTranslation } from "react-i18next";

    
// const cloud_name = process.env.REACT_APP_CLOUD_NAME;
// const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;

const Profile = ({toggleTab, setProfileShowTitle, setProfileShowContent, profile, imagePreview}) => {
     // Translation
     const { t } = useTranslation();
  useRedirectLoggedOutUser("/login");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isLoading, user } = useSelector(
    (state) => state.auth
  );

  
  const profileHandling = ()=>{
    setProfileShowTitle(true);
    setProfileShowContent(false);
  }

   const goToEditProfile = ()=>{
    toggleTab("1");
  }
  return (
      <>
        {isLoading && <Loader />}
          <div className="flex flex-col justify-center items-center profile">
            <span className="flex flex-col justify-center items-start w-full ml-5">
              <ArrowForwardIcon onClick={profileHandling} />
            </span>
            {!isLoading && user && (
              <div className="content-profile flex flex-col justify-center items-center">
                <div className="profile-photo rounded-full">
                  <img
                    src={imagePreview === null ? user?.photo : imagePreview}
                    alt="ProfileImg"
                    />
                </div>
                <div className="profile-details">
                  <div className="m-5 flex justify-center items-center">
                    <h3
                    style={{
                      color: colors.grey[500],
                    }}
                    >{t("profile.role")}: {profile.role}</h3>
                  </div>
                    <p className="mb-3 flex flex-col justify-center align-content-center">{t("profile.profileName")}: {profile.name}</p>
                    <p className="mb-3 flex flex-col justify-center align-content-center">{t("profile.profileEmail")}: {profile.email}</p>
                    <p className="mb-3 flex flex-col justify-center align-content-center">{t("profile.phoneNumber")}: {profile.phone}</p>
                    <p className="mb-3 flex flex-col justify-center align-content-center">{t("profile.bio")}: {profile.bio}</p>
                  </div>
                <Link className="btn mb-3" onClick={goToEditProfile} to="/edit-profile">{t("profile.editProfile")}</Link>
              </div>
            )}
          </div>
      </>
  );
};
export default Profile;