// import profileImg from '../../assets/profile.svg';
// import SidebarIcon from '../icons/SidebarIcon';
import { HiHome } from 'react-icons/hi';
import { ImUser } from 'react-icons/im';
import { IoLayersSharp, IoGrid } from 'react-icons/io5';
import { RiFileList3Line } from 'react-icons/ri';
import { FaChartLine } from 'react-icons/fa';
import { MdOutlineLiquor } from 'react-icons/md';
import { GoChecklist } from 'react-icons/go';

import React from 'react';

export const sidebarData = [
  { title: 'Home', icon: <HiHome />, tab: 'home' },
  { title: 'Profile', icon: <ImUser />, tab: 'profile' },
  { title: 'Advertisements', icon: <GoChecklist />, tab: 'ads' },
  { title: 'Categories', icon: <IoGrid />, tab: 'categories' },
  {
    title: 'Subcategories',
    icon: <IoLayersSharp />,
    tab: 'subcategories',
  },
  { title: 'Products', icon: <MdOutlineLiquor />, tab: 'products' },
  { title: 'Orders', icon: <RiFileList3Line />, tab: 'orders' },
  { title: 'Reports', icon: <FaChartLine />, tab: 'reports' },
];
