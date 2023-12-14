// SideBar.js
import React from 'react';
import './SideBar.css';
import Menu from './Menu';
import { useSelector} from 'react-redux';

const SideBar = () => {
  const sideBarMenuList = useSelector((state) => state.sideBarMenuList);  return (
    <div className="sidebar">
      <Menu list={sideBarMenuList} />
    </div>
  );
};

export default SideBar;
