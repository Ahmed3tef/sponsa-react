import React, { useEffect, useState } from 'react';

import './selector.css';
const Selector = props => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    props.setId('');
  }, []);

  const changeIdHandler = e => {
    props.setId(e.target.value);
    setIsLoading(false);
    console.log(e.target.value);
  };
  return (
    <div className='input-container custom-select'>
      <div className='input-label text-center'>{props.label}</div>
      <select
        onChange={changeIdHandler}
        value={isLoading ? '' : props.id}
        placeholder=''>
        <option
          value=''
          disabled
          defaultValue
          key={Math.round(Math.random() * 10000)}>
          Select the main category for the subcategory ...
        </option>
        {props.data.map(el => {
          // console.log(el);
          return (
            <option value={el.id} key={el.id}>
              {`${el.englishName} - ${el.arabicName}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Selector;
