import React from 'react';
import './Header.css';
import Logo from './Logo';
import DateTime from './DateTime';

const Header = () => {
    const logoImagePath = require('./img/logo-social.png'); 
    return (
        <div className="header">
          <div className="left-section">
            <Logo imagePath={logoImagePath} />
          </div>
          <div className="right-section">
            <DateTime />
          </div>
        </div>
      );
    };
    
    export default Header;