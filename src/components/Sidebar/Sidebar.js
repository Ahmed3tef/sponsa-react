import React from 'react';
import { sidebarData } from './sidebarData';
import './Sidebar.css';
import profileImg from '../../assets/Photo.png';
import menuBar from '../../assets/burgerIcon.svg';
const Sidebar = () => {
  // const [showSidebar, setShowSidebar] = useState(true);
  // const hideSidebarHandler = () => {
  //   setShowSidebar(!showSidebar);
  // };

  // {!showSidebar && ()}  ${showSidebar ? '' : ' sidebar-small'
  return (
    <aside className={`sidebar`}>
      <div className='sidebar__menu'>
        <img src={menuBar} alt='burger menuBar' />
      </div>
      <div className='sidebar__img'>
        <img src={profileImg} alt='profile img' />
        <h3 className='user-name'>Hatem El-Shawaf</h3>
      </div>
      <div className='sidebar__nav'>
        <div className='sidebar__section'>
          {sidebarData.map((bar, i) => (
            <div className='sidebar__link' key={i}>
              <div className='sidebar__icon'>{bar.icon}</div>

              <div className='sidebar__caption'>{bar.title}</div>
            </div>
          ))}
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
