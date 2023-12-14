import React from 'react';

const CurrentTime = ({ currentTime }) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const formattedTime = currentTime.toLocaleTimeString('uk-UA', options);

  return <div>{formattedTime}</div>;
};

export default CurrentTime;
