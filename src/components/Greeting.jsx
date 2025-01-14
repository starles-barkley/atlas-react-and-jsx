import React from 'react';

const Greeting = () => {
  const currentHour = new Date().getHours();
  let message = '';
  let imageSrc = '';

  if (currentHour >= 6 && currentHour < 12) {
    message = 'Good Morning!';
    imageSrc = '/src/assets/day.svg';
  } else if (currentHour >= 12 && currentHour < 17) {
    message = 'Good Afternoon!';
    imageSrc = '/src/assets/day.svg';
  } else if (currentHour >= 17 && currentHour < 21) {
    message = 'Good Evening!';
    imageSrc = '/src/assets/evening.svg';
  } else {
    message = 'Good Night!';
    imageSrc = '/src/assets/night.svg';
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt={message} />
      {message}
    </h1>
  );
};

export default Greeting;
