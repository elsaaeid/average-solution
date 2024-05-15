import React, { useState } from 'react';
import Main from '../../../components/portfolio-components/main/Main';
import IntroHome from "../../../components/portfolio-components/intro-home/IntroHome";
import LandingContainer from "../../../components/portfolio-components/landing-container/LandingContainer";

 const Home = ({
  t,
  setActiveNav
}) => {
  const [btnState, setBtnState] = useState();

  const btnHandling = (state)=>{
    setBtnState(state);
}

  return (
     <section>
        <Main 
          t={t} 
          btnState={btnState} btnHandling={btnHandling} />
        <IntroHome
          setActiveNav={setActiveNav}
          btnHandling={btnHandling} />
          <LandingContainer />
    </section>
  )
}
export default Home
