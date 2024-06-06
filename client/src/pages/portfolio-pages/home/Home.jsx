import React, { useState } from 'react';
import Main from '../../../components/portfolio-components/main/Main';
import IntroHome from "../../../components/portfolio-components/intro-home/IntroHome";


 const Home = ({
  t,
  setActiveNav,
  handleCheckboxChange,
  servicesItem,
  selectedServices,
  btnState,
  btnHandling,
}) => {

  return (
     <section>
        <Main 
          t={t} 
          btnState={btnState} btnHandling={btnHandling} />
        <IntroHome
          setActiveNav={setActiveNav}
          btnHandling={btnHandling} 
          handleCheckboxChange={handleCheckboxChange}
          servicesItem={servicesItem}
          selectedServices={selectedServices}
          />
    </section>
  )
}
export default Home
