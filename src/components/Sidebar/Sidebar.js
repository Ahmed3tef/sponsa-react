import React, { useState } from 'react';
import { sidebarData } from './sidebarData';
import './Sidebar.css';
import profileImg from '../../assets/Photo.png';
import menuBar from '../../assets/burgerIcon.svg';
import { FaPowerOff } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/auth';
const Sidebar = props => {
  const [showSidebar, setShowSidebar] = useState(true);
  const dispatch = useDispatch();
  const toggleSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  // {!showSidebar && ()}  ${showSidebar ? '' : ' sidebar-small'

  const navLinkClickHandler = path => {
    props.setCurrentTab(path);
  };
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <aside className={`sidebar ${showSidebar ? '' : ' sidebar-small'}`}>
      <div className='sidebar__menu' onClick={toggleSidebarHandler}>
        <img src={menuBar} alt='burger menuBar' />
      </div>

      <div className='sidebar__img'>
        <img src={profileImg} alt='profile img' />
      </div>
      <h3 className='user-name'>Hatem El-Shawaf</h3>
      <div className='sidebar__nav'>
        <div className='sidebar__section'>
          {sidebarData.map((bar, i) => (
            <div
              className={`sidebar__link ${
                bar.tab === props.currentTab ? 'active' : ''
              }`}
              key={i}
              onClick={() => navLinkClickHandler(bar.tab)}>
              <div className='sidebar__icon'>{bar.icon}</div>

              <div className='sidebar__caption'>{bar.title}</div>
            </div>
          ))}
          <div
            className={`sidebar__link ${
              props.currentTab === 'logout' ? 'active' : ''
            }`}
            onClick={logoutHandler}>
            <div className='sidebar__icon'>
              <FaPowerOff />
            </div>

            <div className='sidebar__caption'>Logout</div>
          </div>
        </div>

        {/* {showSidebar && (
          <>
            {sidebarData.map((categoryArr, index) => (
              <div className='sidebar__section' key={index}>
                {categoryArr.map(category => (
                  <div className='sidebar__link' key={category.id}>
                    <div className='sidebar__icon'>{category.icon}</div>
                    <div className='sidebar__caption'>{category.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </>
        )} */}
      </div>
    </aside>
  );
};

export default Sidebar;
