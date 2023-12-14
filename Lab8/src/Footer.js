import React from 'react';
import './Footer.css';
import Menu from './Menu';

const Footer = () => {
  const footerMenuList = [
    { text: 'Privacy Policy', url: '/privacy-policy' },
    { text: 'Terms of Service', url: '/terms-of-service' },
  ];

  return (
    <footer className="footerMenu">
      <Menu list={footerMenuList} />
    </footer>
  );
};

export default Footer;