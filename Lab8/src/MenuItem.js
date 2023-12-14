import React from 'react';
import { getId } from './helpers';

const MenuItem = ({ text, url }) => {
  const menuItemId = getId('menu-item');

  return (
    <li id={menuItemId}>
      {url ? (
        <a href={url} target={!url || url.startsWith(window.location.origin) || url.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer">
          {text}
        </a>

      ) : (
        <span>{text}</span>
      )}
    </li>
  );
};

export default MenuItem;
