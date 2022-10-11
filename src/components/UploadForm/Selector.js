import React from 'react';

import './selector.css';
const Selector = props => {
  const changeIdHandler = e => {
    props.setId(e.target.value);
  };
  return (
    <div className='input-container custom-select'>
      <div className='input-label text-center'>{props.label}</div>
      <select onChange={changeIdHandler} value={props.Id} placeholder=''>
        <option value='' disabled defaultValue>
          Select the main category for the subcategory ...
        </option>
        {props.data.map(el => {
          return (
            <option
              value={el.id}>{`${el.englishName} - ${el.arabicName}`}</option>
          );
        })}
      </select>
    </div>
  );
};

export default Selector;
