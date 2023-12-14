import React from 'react';

const Logo = ({ imagePath }) => {
  return (
    <div>
      <a href="http://localhost:3000/">
        <img className="logo_img" src={imagePath} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;