import React from 'react';
import dayImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightImage from '../assets/night.svg';

function Greeting() {
  const currentHour = new Date().getHours();
  let message, imageSrc;

  if (currentHour >= 6 && currentHour <= 11) {
    message = 'Good Morning!';
    imageSrc = dayImage;
  } else if (currentHour >= 12 && currentHour <= 16) {
    message = 'Good Afternoon!';
    imageSrc = dayImage;
  } else if (currentHour >= 17 && currentHour <= 20) {
    message = 'Good Evening!';
    imageSrc = eveningImage;
  } else {
    message = 'Good Night!';
    imageSrc = nightImage;
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt={message} />
      {message}
    </h1>
  );
}

export default Greeting;
