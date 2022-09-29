import React from 'react';
import { useSelector } from 'react-redux';
import { MainPageLayout } from '../components';

import addIcon from '../assets/Add Subcategories.svg';
import { loadSubCategories } from '../store/reducers/subCategories';

const SubCategories = () => {
  const subCategories = useSelector(state => state.subCategories.subCategories);
  return (
    <MainPageLayout
      path='subCategories'
      data={subCategories}
      action={loadSubCategories()}
      title='Active SubCategories'
      addIcon={addIcon}
      image={{ title: 'Subcategory Photo  صورة الفئة الفرعية', width: 320 }}
      arabicName={{ title: 'عنوان الفئة الفرعية', width: 300 }}
      englishName={{ title: 'Subcategory Title', width: 300 }}
    />
  );
};

export default SubCategories;
