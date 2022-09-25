import React from 'react';
import { useSelector } from 'react-redux';

import { loadAds } from '../store/reducers/ads';
import addADIcon from '../assets/Add ADs.svg';
import { MainPageLayout } from '../components';
const Adds = () => {
  const ads = useSelector(state => state.ads.ads);

  return (
    <MainPageLayout
      path='ads'
      data={ads}
      action={loadAds()}
      title='Active ADs'
      addIcon={addADIcon}
      image={{ title: 'AD Photo  صورة الإعلان', width: 260 }}
      arabicName={{ title: 'عنوان الإعلان', width: 130 }}
      englishName={{ title: 'AD Title', width: 130 }}
      arabicDesc={{ title: 'AD Description', width: 270, hide: false }}
      englishDesc={{ title: 'وصف الإعلان', width: 270, hide: false }}
    />
  );
};

export default Adds;
