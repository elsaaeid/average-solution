import React from "react";
import Card from "../../global-components/card/Card";
import Spinner from "../Spinner";
import { updateUser } from "../../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import {Box} from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom'
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";

const EditProfile = ({profile, setProfile, profileImage, setProfileImage, setImagePreview}) => {
       // Translation
       const { t } = useTranslation();
       const navigate = useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
     
 const { isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    let imageURL;
    try {
      if (
        profileImage !== null &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "dzbi59kmu");
        image.append("upload_preset", "jwukjk1g");

        // Save image to Cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dzbi59kmu/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        console.log(imgData);
        imageURL = imgData.url.toString();
      }

      // Save profile to MongoDB
      const userData = {
        name: profile.name,
        phone: profile.phone,
        bio: profile.bio,
        photo: profileImage ? imageURL : profile.photo,
      };

      dispatch(updateUser(userData));
    } catch (error) {
      toast.error(error.message);
    }
    navigate('/');
  };

  return (
    <section>
      <Box className="profile flex flex-col justify-center items-center w-full">
        <h2>{t("profile.editProfile")}</h2>
        <Card>
          <form className="w-full profile-form-control" onSubmit={saveProfile}>
          <div className="flex flex-col justify-center align-content-center">
            <label 
              style={{
                color: colors.grey[500],
              }}
              >{t("profile.changePhoto")}:</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex flex-col justify-center align-content-center">
            <label
              style={{
                color: colors.grey[500],
              }}
            >{t("profile.nameValue")}:</label>
            <input
              type="text"
              name="name"
              value={profile?.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col justify-center align-content-center">
            <label
              style={{
                color: colors.grey[500],
              }}
            >{t("profile.emailValue")}:</label>
            <input
              type="email"
              name="email"
              value={profile?.email}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="flex flex-col justify-center align-content-center">
            <label
              style={{
                color: colors.grey[500],
              }}
            >{t("profile.phone")}:</label>
            <input
              type="text"
              name="phone"
              value={profile?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col justify-center align-content-center">
            <label
              style={{
                color: colors.grey[500],
              }}
            >{t("profile.bio")}:</label>
            <textarea
              name="bio"
              value={profile?.bio}
              onChange={handleInputChange}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <Box className="flex justify-center items-center">
            <button type="submit" className="btn mt-2">
              {
                isLoading ? <Spinner />
                :
                <span>{t("profile.updateProfile")}</span>
              }
            </button>
          </Box>
          </form>        
        </Card>
      </Box>
    </section>
  );
};

export default EditProfile;
