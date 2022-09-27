import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './selector.css';
const Selector = props => {
  const categories = useSelector(state => state.categories.categories);
  const changeIdHandler = e => {
    props.setCatId(e.target.value);
  };
  return (
    <div class='input-container custom-select'>
      <div className='input-label text-center'>{props.label}</div>
      <select onChange={changeIdHandler} value={props.catId} placeholder=''>
        <option value='' disabled selected>
          Select the main category for the subcategory ...
        </option>
        {categories.map(category => {
          return (
            <option
              value={
                category.id
              }>{`${category.englishName} - ${category.arabicName}`}</option>
          );
        })}
      </select>
    </div>
  );
};

export default Selector;
