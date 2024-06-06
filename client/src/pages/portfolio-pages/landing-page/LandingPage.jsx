import React from 'react';
import LandingContainer from "../../../components/portfolio-components/landing-container/LandingContainer";

 const LandingPage = ({
    btnState,
    btnHandling,
}) => {

  return (
     <>
        <LandingContainer
            btnState={btnState}
            btnHandling={btnHandling}
            />
    </>
  )
}
export default LandingPage;
