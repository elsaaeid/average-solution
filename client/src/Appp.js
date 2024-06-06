import React, { useState } from 'react';
import CartContainer from './contain/CartContainer';
import ServicesContainer from './contain/ServicesContainer';

const App = () => {
  const services = ['Service A', 'Service B', 'Service C'];
  const [selectedServices, setSelectedServices] = useState([]);
  return (
    <div>
      <CartContainer selectedServices={selectedServices} />
      <ServicesContainer selectedServices={selectedServices} setSelectedServices={setSelectedServices} services={services} />
    </div>
  );
};

export default App;
