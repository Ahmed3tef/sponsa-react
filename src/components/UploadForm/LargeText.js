import React from 'react';

const LargeText = props => {
  return (
    <div className='input-container input-text-large'>
      <div className='input-label'>
        <p>{props.label}</p>
      </div>
      <textarea placeholder={props.placeholder} />
    </div>
  );
};

export default LargeText;
