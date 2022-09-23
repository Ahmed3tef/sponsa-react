import React from 'react';

const MiniText = props => {
  return (
    <div className='input-container input-text-mini'>
      <div className='input-label'>
        <p>{props.label}</p>
      </div>
      <input type='text' placeholder={props.placeholder} />
    </div>
  );
};

export default MiniText;
