import React, {useState} from "react";
import {RiHeartAddLine} from "react-icons/ri" 


const HeartRating = () => {
  const [count, setCount] = useState(36);

  const handleIncrement = () => {
    localStorage.setItem('heartCount', setCount(count => count + 1));
    localStorage.getItem('heartCount');
  };

 


  return (
    <div className="portfolio__item-icon">
      {count}
      <RiHeartAddLine onClick={handleIncrement} />
    </div>
  );
};

export default HeartRating;
