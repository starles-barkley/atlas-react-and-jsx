import React from 'react';
import { useState, useEffect } from "react"
import sun from '../assets/day.svg';
import dusk from '../assets/evening.svg';
import moon from '../assets/night.svg';

function Greeting(props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
      setCurrentTime(new Date());
  }, [])
  const hour = currentTime.getHours();
  let greeting;
  let image;
  
  if (currentHour >= 6 && currentHour < 12) {
    message = 'Good Morning!';
    image = sun;
  } else if (currentHour >= 12 && currentHour < 17) {
    message = 'Good Afternoon!';
    image = sun;
  } else if (currentHour >= 17 && currentHour < 21) {
    message = 'Good Evening!';
    image = dusk;
    message = 'Good Night!';
    image = moon;
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt={message} />
      {message}
    </h1>
  );
};

export default Greeting;
