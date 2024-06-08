import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/global-components/Loader";
import { RESET, verifyUser } from "../../redux/features/auth/authSlice";
import Spinner from "../../components/global-components/Spinner";
import { useTranslation } from "react-i18next";




const Verify = () => {
  // Translation
  const { t } = useTranslation();
  // use Dispatch
  const dispatch = useDispatch();
  // Token Params
  const { verificationToken } = useParams();
  // Loading States
  const [loading, setLoading] = useState(false);
  // Auth State Select
  const { isLoading } = useSelector((state) => state.auth);

  // Verify Account Function
  const verifyAccount = async () => {
    setLoading(true);
    await dispatch(verifyUser(verificationToken));
    await dispatch(RESET());
    setLoading(false);
  };

  return (
    <section>
      {isLoading && <Loader />}
      <div className="flex flex-col justify-center items-center">
        <h1>{t("profile.accountVerification")}</h1>
        <p>{t("profile.verBelow")}</p>
        <br />
        <div className="w-1/2 flex justify-center items-center">
          <button onClick={verifyAccount} className="btnX flex justify-center items-center w-full">
            {
              loading ? <Spinner />
              :
              <span>{t("profile.verifyAccount")}</span>
            }
          </button>
        </div>
      </div>
    </section>
  );
};

export default Verify;